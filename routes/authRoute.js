const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/auth", authController.renderLoginPage);
router.post("/signup-user", authController.signup);
router.post("/login-user", authController.login);

module.exports = router;
