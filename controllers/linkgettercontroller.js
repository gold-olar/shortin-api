const Links = require('../models/Links');
const User = require('../models/User');


const getlink = (req, res) => {
    const { username } = req.body;
    Links.find({ username: username })
        .sort({ date: 'desc' })
        .then(links => {
            if (!links) {
                res.status(400).json({
                    message: `You haven't Shortined anything yet ${username}.`
                })
            } else {
                User.findOne({username: username})
                .then(user=>{
                    console.log(user.links)
                    res.status(200).json({
                        links: links,
                        no_links: user.links
                    });
                })
                
            }
        })

}

module.exports = getlink