const express = require('express');
const router = express.Router();
const linkgettercontroller = require('../controllers/linkgettercontroller')

router.get('/', linkgettercontroller)


module.exports = router;