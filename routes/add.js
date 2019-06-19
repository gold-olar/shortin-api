const express = require('express');
const router = express.Router();
const addlink = require('../controllers/addcontroller')


router.post('/', addlink);

module.exports = router;