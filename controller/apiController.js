var bookModal = require('../modal/bookModal');
var userModal = require('../modal/userModal');

apiController = {};

apiController.user = {
	getList: function(req, res, next){
		userModal.getAllUser().then(function(results){
			return res.json({status: 200, error: null, rows: results.length, response: results});
		}).catch(function (reason) {
		    throw reason;
	    });
	},
	getDetail: function(req, res, next){
		let userId = parseInt(req.params.id);
		if(typeof userId === 'number'){
			userModal.userDetail(userId).then(function(results){
				return res.json({status: 200, error: null, rows: 1, response: results[0]});
			}).catch(function (reason) {
			    throw reason;
	        });
		}else{
			return res.json({status: 200, error: "Please provide a user id."});
		}
	},
	insert: function(req, res, next){
		userModal.AddNewUser(req.body).then(function (results) {
	        return res.json({status: 200, error: null, rows: results.length, response: results});
	    }).catch(function (reason) {
	        throw reason;
	    });
	},
	update: function(req, res, next){
		let userId = parseInt(req.params.id);
	    userModal.UpdateUser(req.body, userId).then(function (results) {
	        return res.json({status: 200, error: null, rows: results.length, response: results});
	    }).catch(function (reason) {
	        throw reason;
	    });
	},
	delete: function(req, res, next){
		let userId = parseInt(req.params.id);
	    userModal.DeleteUser(userId).then(function (results) {
	        return res.json({status: 200, error: null, rows: results.length, response: results});
	    }).catch(function (reason) {
	        throw reason;
	    });
	}
};


apiController.book = {
	getList : function(req, res, next){
		bookModal.getAllBook().then(function (results) {
	        return res.json({status: 200, error: null, rows: results.length, response: results});
	    }).catch(function (reason) {
	        throw reason;
	    });
	},
	getDetail: function(req, res, next){
		let bookId = parseInt(req.params.id);
		if(typeof bookId === 'number'){
		    bookModal.bookDetail(bookId).then(function(result){
	            return res.json({status: 200, error: null, rows: 1, response: result[0]});
	        }).catch(function(err){
	            throw err;
	        });
		}else{
			return res.json({status: 200, error: "Please provide a book id."});
		}
	},
	insert: function(req, res, next){
		bookModal.AddNewBook(req.body).then(function (results) {
	        return res.json({status: 200, error: null, rows: results.length, response: results});
	    }).catch(function (reason) {
	        throw reason;
	    });
	},
	update: function(req, res, next){
		let bookId = parseInt(req.params.id);
	    bookModal.UpdateBook(req.body, bookId).then(function (results) {
	        return res.json({status: 200, error: null, rows: results.length, response: results});
	    }).catch(function (reason) {
	        throw reason;
	    });
	},
	delete: function(){
		let bookId = parseInt(req.params.id);
	    bookModal.DeleteBook(bookId).then(function (results) {
	        return res.json({status: 200, error: null, rows: results.length, response: results});
	    }).catch(function (reason) {
	        throw reason;
	    });
	}
};

module.exports = apiController;