const express = require("express");
const router = express.Router();
const ProductController = require("../app/Controller/ProductController");

router.get("/create", ProductController.create);
router.post("/store", ProductController.store);

router.use("/:slug", ProductController.show);
router.use("/", ProductController.index);
// router.route("/register").post(register);
// router.route("/login").post(login);
module.exports = router;
