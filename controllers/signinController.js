const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config()
const secret = process.env.JWT_SECRET;


const signin = (req, res, next) => {
    const {username, password} = req.body;
	let errors = []
	User.findOne({
		username: username
	}).then(user => {
		if (user) {
			bcrypt.compare(password, user.password, (err, isMatch) => {
				if (isMatch) {
					jwt.sign({ user: user.username }, secret,{expiresIn :"12h"}, (err, token)=>{
						res.header('auth', token);
						res.status(200).json('Signed In')
					});					
				} else {
						res.status(400).json({
							message: 'Wrong Password'
						});
					
				}
			});
		} else {
			console.log(req.body)
			res.status(400).json({
				message: 'Invalid username. Please Sign up or make sure your username is correctly typed.'
			})
		

		}
	});
}

module.exports = signin