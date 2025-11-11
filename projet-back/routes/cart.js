const express = require("express");
const router = express.Router();
const { getCartCount } = require("../controllers/cartcontroller");
const isAuth = require("../midlewares/authmidleware");

router.get("/count", isAuth, getCartCount);

module.exports = router;


