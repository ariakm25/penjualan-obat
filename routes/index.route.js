const indexController = require('../controllers/index.controller');
const obatController = require('../controllers/obatController')
const guest = require('../middlewares/guest');
const auth = require('../middlewares/auth');

const router = require('express').Router();

router.get('/', guest, indexController.index);
router.post('/login', guest, indexController.login);
router.get('/logout', auth, indexController.logout);

router.get('/dashboard', auth, indexController.dashboard);
router.get('/obats', auth, obatController.index);
router.get('/obats/create', auth, obatController.create);
router.post('/obats/store', obatController.store);
router.get('/obats/:id/edit', obatController.edit);
router.post('/obats/:id/update', obatController.update);
router.get('/obats/:id/delete', obatController.delete);

module.exports = router;
