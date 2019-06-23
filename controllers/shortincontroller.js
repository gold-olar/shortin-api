const validator = require('validator');
const randomstring = require("randomstring");
const Links = require('../models/Links');
const User = require('../models/User');


const shortin = (req, res) => {
    const { longlink, username } = req.body;
    //console.log(76897)
    try {
        User.findOne({ username: username })
            .then(user => {
                if (user) {

                } else {
                    res.status(400).json({
                        failure_message: 'Please create an account before you can use our services...'
                    })
                }
            })
    }
    catch (err) {
            if (err) {
                console.log(err)
            }

        }

    }
module.exports = shortin;