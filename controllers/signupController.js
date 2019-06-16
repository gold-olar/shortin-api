const User = require('../models/User');
const bcrypt= require('bcryptjs');

const signUp = (req, res, next)=>{
    const{username, email, password, password2} = req.body
    let errors = [];
    if (password != password2) {
      errors.push({ message: 'Passwords do not match' });
    } if (password.length < 4) {
      errors.push({ message: 'Password must be at least 4 characters' });
    }if (username.length < 4) {
      errors.push({ message: 'Username must be at least 4 characters' });
    }
    
    if (errors.length > 0 ){
      res.status(406).json({
        status: 406,
        message: 'i don jam error oh boss man',
        errors: errors
      })
    }else{
      User.findOne({username: username})
      .then(user=> {
        if(user){
          res.json({
            message: "User already exists with such username"
          })
        }else{
          const newUser = new User({
              username: username,
              email: email,
              password: password,
            });
            bcrypt.genSalt(10,(err, salt)=>{
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                  .then(user => {
                    res.json({
                        status : 200,
                        message: 'User Registered',
                        userDetails : user
                    });
                  })
                  .catch(err => {
                    console.log(err);
                    return;
  
                  });
              });
  
  
            })
        } 
      })
 
    }

}
module.exports= signUp;
