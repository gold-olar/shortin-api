const User = require('../models/User');
const Links = require('../models/Links');

// I dont think i later used this endpoint----lol
const profilegetter = (req, res) => {
    const {id} = req.body;
    User.findOneAndUpdate({ _id: id }, { $inc: { links: 1 } }, {useFindAndModify: false})
        .then(user => {
            if(!user){
                res.status(404).json({
                    message: 'User Not Found'
                })
            }else{
                Links.find({username: user.username})
                .then(links=>{
                    res.status(200).json({
                        'user': user,
                        'links': links
                    })
                })
            }
           
        })

}

 



module.exports = profilegetter;