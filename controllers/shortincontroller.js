const validator = require('validator');
const randomstring = require("randomstring");
const Links = require('../models/Links');


const shortin = (req, res) => {
    const { longlink, username } = req.body
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
                            res.status(200).json({
                                'Message': 'Shortined',
                                'shortined_link': newLink.short,
                                'longlink': newLink.long
                            })

                        });
                } else {
                    res.status(409).json({
                        'message': 'Link has previously been Shortined.!!!',
                        'shortined_as': link.short
                    })
                }
            })
    } else {
        res.status(400).json(`Url ${longurl} is not a valid url`);
    };

}
module.exports = shortin;