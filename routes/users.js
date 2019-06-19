const express = require('express');
const router = express.Router();
const profilegetter = require('../controllers/profilegetter')

/* GET users listing. */
router.post('/:id',profilegetter) 

module.exports = router;
