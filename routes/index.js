var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id?', function(req, res, next) {
	if(req.params.id){
		var index = req.params.id;
	}
	else{
		var index = 'welcome';
	}
	console.log(index);
  res.render('index', { title: index });
});
router.post('/reg', function(req,res,next){
	console.log(req.body.name);
	console.log(req.body.pass);
	res.redirect('/');
});
module.exports = router;
