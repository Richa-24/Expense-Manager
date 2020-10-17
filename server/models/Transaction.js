const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    min: 6,
    max: 255,
    required: true
  },
  type: {
    type: String,
    min: 1,
    max: 1,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: () => Date.now()
  }
})

module.exports = mongoose.model('Transactions', transactionSchema)
