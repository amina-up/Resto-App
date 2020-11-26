const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");


router.post("/signUp",  authController.signUp);
router.post("/signIn",  authController.signIn);
router.post("/logout", authController.logOut);
router.get("/getprofil",authController.getprofil)


module.exports = router;
