const Joi = require('joi')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

const registerValidator = data => {
  const schema = Joi.object({
    name: Joi.string().required().min(4).max(255),
    email: Joi.string().required().min(2).max(255).email(),
    password: Joi.string().required().min(6).max(255)
  })

  return schema.validate(data)
}

const registerController = async (req, res) => {
  const validationError = registerValidator(req.body)
  if (validationError.error) return res.json({ message: validationError.error.details[0].message })

  const { name, email, password } = req.body

  try {
    if (await User.findOne({ email: email })) return res.status(400).json({ message: "Email already exists!" })

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await new User({ name, email, password: hashedPassword }).save()
    res.json(user)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = { registerController }
