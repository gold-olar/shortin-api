const User = require('../models/User');

const profilegetter = (req, res, next) => {
    const { id } = req.params;
    User.findOneAndUpdate({ _id: id }, { $inc: { links: 1 } })
        .then(user => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(400).json({
                    message: 'User Not Found'
                })

            }
        })



}
module.exports = profilegetter;