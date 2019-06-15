const express = require('express')
const router = express.Router();
const signinController = require('../controllers/signinController.js');

router.post('/', signinController);


module.exports = router;