const validator = require('validator');
const randomstring = require("randomstring");
const Links = require('../models/Links');
const User = require('../models/User');


const shortin = (req, res) => {
    const { longlink, username, no_of_links } = req.body;

    try {
        if (validator.isURL(longlink)) {
            //Generate Random String
            const generated_string = randomstring.generate({
                length: 7,
                charset: 'alphabetic'
            });
            //Search database if link has already been shortined prev
            Links.findOne({
                long: longlink
            })
                .then(link => {
                    //If link hasn't been previously shortined, Save newlink
                    if (!link) {
                        const newLink = {
                            long: longlink,
                            short: `${req.headers.host}/${generated_string}`,
                            username: username,
                            linkfinder: generated_string
                        }
                        new Links(newLink)
                            .save()
                            .then(links => {
                                User.findOneAndUpdate({ username: username }, { $inc: { links: 1 } }, {useFindAndModify: false})
                                .then(user=>{
                                     res.status(200).json({
                                    success_message: 'Shortined',
                                    shortined_link: newLink.short,
                                    longlink: newLink.long,
                                    username: username,
                                    no_of_links: user.links
                                })

                                })
                               

                            });
                    } else {
                        res.status(409).json({
                            failure_message: `Link has previously been Shortined as ${link.short}`,
                            username: username,
                            no_of_links: no_of_links

                        })
                    }
                })
        } else {
            res.status(400).json({
                failure_message: `Not a valid url`,
                username: username,
                no_of_links: no_of_links
            });
        };

    }
    catch (err) {
        if (err) {
            console.log(err)
        }

    }

}
module.exports = shortin;