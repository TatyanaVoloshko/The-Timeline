const express = require('express')
const router = express.Router()
const commentController = require('../controllers/newMessageController')
const middlewareFun = require("../middleware/auth");

router.post("/newComment", middlewareFun.checkUserLogin, commentController.postNewComment);

module.exports = router