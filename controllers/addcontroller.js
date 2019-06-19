const Links = require('../models/Links');


const addLink = (req, res) => {
    let errors =[]
    if(!req.body){
        errors.push({'message': 'Please Enter a link to shortin'})
    }
    if (errors.length > 0){
        res.status(406).json(errors)
    }else{
        const {longlink, shortlink } = req.body
        const newLink = {
            longLink: longlink,
            shortlink: shortlink ,
            username: username
        }
        new Links(newLink)
            .save()
            .then(links=> {
                console.log(123456789)
                res.status(200).redirect('/user');
            });
    }
};

module.exports = addLink;