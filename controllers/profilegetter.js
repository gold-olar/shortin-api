const User = require('../models/User');

const profilegetter = (req, res, next)=>{
    const {id} = req.params;
    User.findOne({
        _id: id
    }).then(user =>{
        if (user){
            res.status(200).json({
                message: 'User Found',
                username: user.username,
                email: user.email,
                links: user.links
            })
        }else{
            res.status(400).json({
               message: 'User Not Found'
            })
            
        }

    })
    .catch(err=>{
        res.status(400).json({
            error: err,
            message: 'User Not found'
        })
       

    })

}
module.exports = profilegetter;