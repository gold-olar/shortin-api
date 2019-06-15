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
						res.send(200).json({
                            message: 'Signed In'
                        })
					});					
				} else {
					errors.push({ message: "Wrong Password." })
					if (errors.length > 0) {
						res.json({
							error: errors
						});
					}
				}
			});
		} else {
			errors.push({ message: "Invalid username. Please Sign up or make sure your username is correctly typed." });
			if (errors.length > 0) {
				res.json({
					error: errors
				});
			}

		}
	});
}

module.exports = signin