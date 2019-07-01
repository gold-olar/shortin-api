const express = require('express');
const router = express.Router();
const linkgettercontroller = require('../controllers/linkgettercontroller')

router.post('/', linkgettercontroller);

module.exports = router;