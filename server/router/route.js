const express= require('express');
const router = express.Router();
const { check } = require('express-validator');
const controller = require('../Controller/controller');

// SuccessStories  
router.get('/getISPList',controller.getISPList);
router.post('/registerISP',[
    check('email').isEmail(),
    check('name').exists(),
    check('contact_no').isMobilePhone(),
    check('max_speed').isInt()
],controller.registerISP);

module.exports = router;