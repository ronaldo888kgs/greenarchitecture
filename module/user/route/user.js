/*
Project : Cryptotrades
FileName : route.js
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the file which used to define all route releated to user api request.
*/

var express = require('express')
var router = express.Router();
var userController = require("./../controller/userController")
const { check } = require('express-validator');
var auth = require("./../../../middleware/auth");
var adminauth = require("./../../../middleware/adminauth");
router.get('/',userController.getList)

router.post('/register', userController.register)

router.post('/login',[check('username').not().isEmpty(),check('password').not().isEmpty()],userController.login)

router.post('/opt_verify',[check('activation_code').not().isEmpty(),check('opt_code').not().isEmpty()],userController.optVerify)

router.post('/forgot',[check('email').isEmail()],userController.forgot)

router.post('/update_profile_image_info', [check('email').isEmail(), check('profile_image').not().isEmpty()], userController.UpdateImageInfo)

router.post('/update_profile_cover_info', [check('email').isEmail(), check('profile_cover').not().isEmpty()], userController.UpdateImageInfo)

router.post('/update', [auth], userController.update)

router.post('/reset', [auth,check('newpassword').not().isEmpty()],userController.resetpassword)

router.post('/change', [check('newpassword').not().isEmpty(),check('oldpassword').not().isEmpty(),auth],userController.changepassword)

router.put('/profilesettings',auth,userController.updatesettings)

router.get('/profile/:userId',userController.details)


router.post('/fulllist',adminauth,userController.getAdminList)
router.post('/statusupdate',adminauth,userController.updateStatus)



router.post('/info',[check('public_key').not().isEmpty()],userController.getUserInfo)



router.post('/chat',auth,userController.getListByIds)


module.exports = router