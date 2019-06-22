const Links = require('../models/Links');


const getlink= (req, res)=>{
    const {linkgetter} = req.params;
    console.log(linkgetter);
    // console.log(req)
    Links.findOne({
        linkfinder: linkgetter
    }).then(link=>{
        if(link){
            const redirect = link.long
            res.status(200).redirect(redirect);
        }else{
            res.status(404).json('Please this is not associated with shortin ')
        }
    })

}

module.exports = getlink