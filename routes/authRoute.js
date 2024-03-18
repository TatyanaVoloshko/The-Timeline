const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/auth", authController.renderLoginPage);
router.post("/signup-user", authController.signup);
router.post("/login-user", authController.login);
router.get("/logOut", authController.logOut);
// router.post("/logOut", authController.logOut)

module.exports = router;
