var userValidation = function(req){

    req.checkBody('name').notEmpty();
    req.checkBody('email').isEmail();
    req.checkBody('username').notEmpty();
    req.checkBody('contact').notEmpty();

    return req.validationErrors();
}

module.exports = userValidation;