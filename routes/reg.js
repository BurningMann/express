var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('reg');
});
router.post('/', function(req, res, next) {
	var post = req.body;
	console.log(post)
	var Users = require('../models/users').Users;
  var username = req.body.username;
  var password = req.body.password;
var users = new Users({
 username: username,
 password: password
});
users.save(function(err, user){
     console.log(arguments);
	 req.session.user = 
	 ser._id;
}); 

});

module.exports = router;