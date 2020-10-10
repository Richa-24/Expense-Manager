const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err) => {
  if (err) return console.log(err)
  console.log('DB is connected!')
})

app.use('/api/user', authRoutes)

app.listen(8000, () => {
  console.log('Server is up and running at port 8000')
})
