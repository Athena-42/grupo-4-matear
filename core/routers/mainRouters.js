const express = require ('express');
const router = express.Router();
const productoControllers = require('../controllers/productoControllers');
const mainControllers = require('../controllers/mainControllers');
const multer = require ('multer');
const path = require('path');
const {check} = require('express-validator');
const validaciones = [
    check('email').isEmail().withMessage('Ingese una dirección de correo válido')
                  .custom( ({req})=> {
                        let mail = req.query.value;
                        if (mail == 'gonzalopelizza@hotmail.com'){
                            throw new Error('Password confirmation does not match password');
                        }
                        return true
                    }
                  ).withMessage('Mail incorrecto'),
    check('password').isLength({min: 6}).withMessage('Password inválida')
];

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
router.get('/productdetail', productoControllers.producDetalle);
router.get('/products/new', productoControllers.producNew);
router.post('/products/new', upload.single('imgProduct'),productoControllers.productProcessImg);
router.get('/products/edit', productoControllers.producEdit);
router.get('/register', mainControllers.registrar);
router.post('/register', validaciones,mainControllers.insertarUsu);

router.get('/login', mainControllers.login);
router.post('/login', validaciones,mainControllers.processLogin);

router.get('/cart', productoControllers.productCart);
router.get('/detail', productoControllers.producDetalle);
/*router.get('/products/add', productoControllers.productAdd);*/





module.exports = router;