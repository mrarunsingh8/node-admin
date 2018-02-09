var express = require('express');
var router = express.Router();

var apiController = require('../modules/api/apiController');

router.get('/', function(req, res, next) {
	res.send("Api goes Here.");
});

router.get('/user', apiController.user.getList);
router.get('/user/:id', apiController.user.getDetail);
router.post('/user', apiController.user.insert);
router.put('/user', apiController.user.insert);
router.put('/user/:id', apiController.user.update);
router.patch('/user/:id', apiController.user.update);
router.delete('/user/:id', apiController.user.delete);


router.get('/book', apiController.book.getList);
router.get('/book/:id', apiController.book.getDetail);
router.post('/book', apiController.book.insert);
router.put('/book', apiController.book.insert);
router.put('/book/:id', apiController.book.update);
router.patch('/book/:id', apiController.book.update);
router.delete('/book/:id', apiController.book.delete);






module.exports = router;