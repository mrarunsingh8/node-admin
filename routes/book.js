var express = require('express');
var multerUploader = require("../lib/multerUploader");

var router = express.Router();

var bookController = require('../modules/book/bookController');


router.get('/', bookController.getList);

router.get('/add', bookController.add);

router.post('/add', bookController.add);

router.get('/edit/:id', bookController.getDetail);

router.post('/edit/:id', bookController.update);

router.get('/delete/:id', bookController.delete);

router.post('/upload', multerUploader.single('image'), function (req, res, next) {
    res.send(JSON.stringify(req));
});//bookController.upload

module.exports = router;
