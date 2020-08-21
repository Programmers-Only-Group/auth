const router = require('express').Router();
const passport = require('passport');
const AuthController = require('../controllers/AuthController');

router.get('/callback', passport.authenticate('github'), AuthController.redirectedUser)

router.get('/', passport.authenticate('github'));

module.exports = router;