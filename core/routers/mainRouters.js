const express = require ('express');
const router = express.Router();
const productoControllers = require('../controllers/productoControllers');
const mainControllers = require('../controllers/mainControllers');
const multer = require ('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'public/images/uploads')
    },
    filename: function (req,file,cb){
        cb(null,file.fieldname +'-'+Date.now()+ path.extname(file.originalname))
    }
}
);
var upload = multer({storage: storage});


router.get('/', mainControllers.index);
router.get('/home', mainControllers.index);
router.get('/productdetail', productoControllers.producDetalle);
router.get('/products/new', productoControllers.producNew);
router.post('/products/new', upload.single('imgProduct'),productoControllers.productProcessImg);
router.get('/products/edit', productoControllers.producEdit);
router.get('/register', mainControllers.registrar);
router.get('/login', mainControllers.login);
router.get('/cart', productoControllers.productCart);
router.get('/detail', productoControllers.producDetalle);
/*router.get('/products/add', productoControllers.productAdd);*/





module.exports = router;