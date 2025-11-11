const express = require("express");
const router = express.Router();
const { submitContact } = require("../controllers/contactcontroller");
const { contactValidation, validator } = require("../midlewares/validator");

router.post("/", contactValidation(), validator, submitContact);

module.exports = router;


