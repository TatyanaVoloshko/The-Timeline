const express = require('express')
const router = express.Router()
const newMessageController = require('../controllers/newMessageController')
const middlewareFun = require("../middleware/auth");

router.post("/", middlewareFun.checkUserLogin, newMessageController.postNewMessage);

module.exports = router