const Joi = require("joi")
const Transaction = require("../models/Transaction")
const User = require("../models/User")

const transactionsValidator = data => {
  const schema = Joi.object({
    user_id: Joi.string().min(6).max(255).required(),
    title: Joi.string().min(2).max(255).required(),
    type: Joi.string().min(1).max(1).required(),
    amount: Joi.number().min(1).max(1000000).required()
  })

  return schema.validate(data)
}

const validateUserId = data => {
  const schema = Joi.object({
    user_id: Joi.string().min(6).max(255).required()
  })

  return schema.validate({ user_id: data })
}

const postTransaction = async (req, res) => {
  const { user_id } = req.headers

  const validationError = transactionsValidator({ ...req.body, user_id })
  if (validationError.error) return res.status(400).json({ error: validationError.error.details[0].message })

  const { title, type, amount } = req.body

  try {
    const user = await User.find({ _id: user_id })
    if (!user) return res.status(400).json({ error: 'User does not found' })

    const transaction = await new Transaction({ user_id, title, type, amount }).save()

    return res.json(transaction)

  } catch (err) {
    return res.status(400).json({ error: err.message })
  }

}

const getAllTransactions = async (req, res) => {
  const { filter, limit, page } = req.query

  const { user_id } = req.headers
  const validationError = validateUserId(user_id)
  if (validationError.error) return res.status(400).json({ message: validationError.error })

  try {
    const transactions = await paginate(Transaction, { filter, limit, page })
    res.json(transactions)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

const paginate = async (model, { filter, limit, page }) => {
  page = Number(page) || 1
  limit = Number(limit) || 20

  const startIndex = (page - 1) * limit
  const totalPages = Math.ceil((await model.countDocuments()) / limit)

  const res = {}
  res.totalPages = totalPages
  res.page = page
  res.limit = limit
  res.filter = filter

  let query = { type: filter }
  if (!filter) {
    query = {}
  }

  res.results = await model.find(query).skip(startIndex).limit(limit)

  return res
}


const getSummary = async (req, res) => {
  const { user_id } = req.headers
  const validationError = validateUserId(user_id)
  if (validationError.error) return res.status(400).json({ message: validationError.error })

  try {
    const totalAmount = (await Transaction.find({ user_id, type: 'C' }, { amount: 1 })).reduce((a, c) => a + c.amount, 0)
    const expense = (await Transaction.find({ user_id, type: 'D' }, { amount: 1 })).reduce((a, c) => a + c.amount, 0)
    const balance = totalAmount - expense

    const results = { totalAmount, expense, balance }
    res.json(results)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}

module.exports = { getAllTransactions, postTransaction, getSummary }

