const express = require('express');
const router = express.Router();
const shortincontroller = require('../controllers/shortincontroller');



router.get('/',shortincontroller);


module.exports = router;
