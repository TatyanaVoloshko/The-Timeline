const express = require('express')
const router = express.Router()
const getMessageController = require('../controllers/getMessageController')

router.get('/', getMessageController.getMessages)

module.exports = router