var userModal = require('../modal/userModal');

let userController = {
	getList: function(req, res, next){
		userModal.getAllUser().then(function(results){
			return res.render('modules/user/index', { userData:results});
		}).catch(function (reason) {
		    throw reason;
	    });
	},

	getDetail: function(req, res, next){
		let userId = parseInt(req.params.id);
		if(typeof userId === 'number'){
			userModal.userDetail(userId).then(function(results){
				console.log(results);
				return res.render('modules/user/form', { userData:results});
				//return res.json({status: 200, error: null, rows: 1, response: results[0]});
			}).catch(function (reason) {
			    throw reason;
	        });
		}else{
			return res.json({status: 200, error: "Please provide a user id."});
		}
	},

	update: function(req, res, next){
		let userId = parseInt(req.params.id);
	    userModal.UpdateUser(req.body, userId).then(function (results) {
	        //return res.json({status: 200, error: null, rows: results.length, response: results});
	    }).catch(function (reason) {
	        throw reason;
	    });
	},

	delete: function(req, res, next){
		let userId = parseInt(req.params.id);
	    userModal.DeleteUser(userId).then(function (results) {
	    	return res.redirect('/user');
	    }).catch(function (reason) {
	        throw reason;
	    });
	},

};

module.exports = userController;