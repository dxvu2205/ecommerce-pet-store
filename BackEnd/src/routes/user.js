const express = require("express");
const {
  register,
  login,
  index,
  destroy,
} = require("../app/Controller/AuthController");

const router = express.Router();
// router.post("/register",register());
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/").get(index);
router.route("/delete").get(destroy);

module.exports = router;
