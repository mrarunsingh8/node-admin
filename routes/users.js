var express = require('express');
var router = express.Router();

var userController = require('../controller/userController');

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.render('modules/user/index', { title: 'Express' });
});*/

router.get('/', userController.getList);

router.get('/delete/:id', userController.delete);

router.get('/edit/:id', userController.getDetail);

module.exports = router;
