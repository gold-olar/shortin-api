const express = require('express');
const router = express.Router();
const profilegetter = require('../controllers/profilegetter')

/* GET users listing. */
router.post('/',profilegetter) 

module.exports = router;
