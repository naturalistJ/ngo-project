'use strict';

let express = require('express');
let auth = require('../middleware/auth');
let studentRouter = express.Router();

studentRouter.use(function(req, res, next) {
	auth.authenticate(req, res, next, 'student');
});

studentRouter.get('/', function(req, res) {
	console.log('GET /student');
	res.render('studentHome.ejs', {
		user: req.user
	});
});

module.exports = studentRouter;