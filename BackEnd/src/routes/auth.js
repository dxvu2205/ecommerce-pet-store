const express = require("express");
const { register, login } = require("../app/Controller/AuthController");

const router = express.Router();
// router.post("/register",register());
router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
