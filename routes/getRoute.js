const express = require('express')
const router = express.Router()
const getMessageController = require('../controllers/getMessageController')
const middlewareFun = require('../middleware/auth')


router.get('/', middlewareFun.checkUserLogin, getMessageController.getMessages)
router.get("/post/:postId", getMessageController.getPost);

module.exports = router