var express = require('express');
var router = express.Router();
const userController = require('../controller/index');
/* GET home page. */
router.get('/', userController.getAll);

module.exports = router;
