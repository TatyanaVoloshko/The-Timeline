const express = require('express')
const router = express.Router()
const newMessageController = require('../controllers/newMessageController')

router.post('/', newMessageController.postNewMessage)

module.exports = router