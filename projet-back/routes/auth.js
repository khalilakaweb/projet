const express = require("express");
const router = express.Router();
const { test, register, login, current, me, logout } = require("../controllers/authcontrollers");
const isAuth = require("../midlewares/authmidleware");
const { registerValidation, validator } = require("../midlewares/validator");

router.get("/test", test);
router.post("/register", registerValidation(), validator, register);
router.post("/login", login);
router.get("/current", isAuth, current);
router.get("/user", isAuth, me);
router.post("/logout", isAuth, logout);

module.exports = router;


