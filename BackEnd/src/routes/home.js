const express = require('express');
const HomeController = require('../app/Controller/HomeController');
const router = express.Router();



router.use('/',HomeController.index);

module.exports = router;