var express = require('express');
var router = express.Router();
const linkgettercontroller = require('../controllers/linkgettercontroller')

router.get('/:linkgetter', linkgettercontroller)

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log('Welcome to the Shortin API..')
  res.status(200).json({
    message: "Welcome to Shortin's API"
  });
});

module.exports = router;
