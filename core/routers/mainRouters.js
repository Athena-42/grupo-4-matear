const express = require ('express');
const router = express.Router();

const productoControllers = require('../controllers/productoControllers');
const mainControllers = require('../controllers/mainControllers');


router.get('/', mainControllers.index);
router.get('/home', mainControllers.index);
router.get('/productdetail', productoControllers.producDetalle);
router.get('/products/new', productoControllers.producNew);
router.get('/products/edit', productoControllers.producEdit);
router.get('/register', mainControllers.registrar);
router.get('/login', mainControllers.login);
router.get('/cart', productoControllers.productCart);
router.get('/detail', productoControllers.producDetalle);
/*router.get('/products/add', productoControllers.productAdd);*/





module.exports = router;