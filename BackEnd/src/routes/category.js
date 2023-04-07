const express = require("express");
const router = express.Router();
const CategoryController = require("../app/Controller/CategoryController");

router.get("/formcreate", CategoryController.formCreate);
router.post("/create", CategoryController.create);
router.post("/update", CategoryController.update);
router.get("/delete", CategoryController.deletes);

router.get("/edit", CategoryController.edit);

// router.post("/store", CategoryController.store);

router.use("/:slug", CategoryController.show);
router.use("/", CategoryController.index);
module.exports = router;
