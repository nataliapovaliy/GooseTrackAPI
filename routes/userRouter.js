const express = require('express');
const router = express.Router();
const controller = require('../controller/userController');
const checkJwt = require('../middlewares/checkJwt');
const { validateUser, validateEmail } = require('../middlewares/validation');
const upload = require('../middlewares/upload');

router.post('/register', validateUser, controller.register);
router.get('/verify/:verificationToken', controller.verifyEmail);
// router.post('/verify', controller.resendVerifyEmail);
router.post('/verify', validateEmail, controller.resendVerifyEmail);


router.post('/login', controller.login);
router.get('/logout', checkJwt, controller.logout);
router.post('/current', checkJwt, controller.current);
router.patch('/avatar', checkJwt, upload.single("avatar"), controller.updateAvatar);

module.exports = router;