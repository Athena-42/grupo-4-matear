const express = require ('express');
const router = express.Router();

const productoControllers = require('../controllers/productoControllers');
const mainControllers = require('../controllers/mainControllers');


router.get('/', mainControllers.index);
router.get('/home', mainControllers.index);
router.get('/productdetail', productoControllers.producDetalle);
router.get('/productNew/:id', productoControllers.producNew);
router.get('/register', mainControllers.registrar);
router.get('/login', mainControllers.login);
router.get('/cart', productoControllers.productCart);
router.get('/detail', productoControllers.producDetalle);





module.exports = router;