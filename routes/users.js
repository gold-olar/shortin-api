const express = require('express');
const router = express.Router();
const profilegetter = require('../controllers/profilegetter')


router.post('/',profilegetter) 

module.exports = router;
