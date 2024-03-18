const express = require('express')
const router = express.Router()
const commentController = require('../controllers/newMessageController')


router.post("/newComment", commentController.postNewComment);

module.exports = router