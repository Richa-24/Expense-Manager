const express = require('express')
const { getAllTransactions, postTransaction, getSummary } = require('../controllers/transactionController')

const router = express.Router()

router.get('/', getAllTransactions)
router.post('/', postTransaction)
router.get('/summary', getSummary)

module.exports = router
