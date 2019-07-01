const express = require('express');
const router = express.Router();
const shortincontroller = require('../controllers/shortincontroller');

router.post('/',shortincontroller);


module.exports = router;
