const Links = require('../models/Links');


const addLink = (req, res) => {
    let errors =[]
    if(!req.body){
        errors.push({'message': 'Please Enter a link to shortin'})
    }
    if (errors.length > 0){
        res.status(406).json(errors)
    }else{
        const {longlink, shortlink, username } = req.body
        const newLink = {
            long: longlink,
            short: shortlink ,
            username: username
        }
        new Links(newLink)
            .save()
            .then(links=> {
                console.log(newLink)
                res.status(200).json('Added to database');
            });
    }
};

module.exports = addLink;