const indexController = require('../controllers/index.controller');
const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', guest, indexController.index);
router.post('/login', guest, indexController.login);
router.get('/logout', auth, indexController.logout);

router.get('/dashboard', auth, indexController.dashboard);

module.exports = router;
