const express = require ('express');
const router = express.Router();
const productoControllers = require('../controllers/productoControllers');
const mainControllers = require('../controllers/mainControllers');
const multer = require ('multer');
const path = require('path');
const {body} = require('express-validator');
const validations = require('../middlewares/validateRegisterMiddleware')
// const validaciones = [
//     check('email').isEmail().withMessage('Ingese una dirección de correo válido')
//                   .custom( ({req})=> {
//                         let mail = req.query.value;
//                         if (mail == 'gonzalopelizza@hotmail.com'){
//                             throw new Error('Password confirmation does not match password');
//                         }
//                         return true
//                     }
//                   ).withMessage('Mail incorrecto'),
//     check('password').isLength({min: 6}).withMessage('Password inválida')
// ];

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null,'./public/images/avatars')
    },
    filename: function (req, file, cb){
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,fileName);
    }
}
);
 const upload = multer({storage: storage});


router.get('/', mainControllers.index);
router.get('/products', mainControllers.todosProducts)
router.get('/productdetail', productoControllers.producDetalle);
router.get('/products/new', productoControllers.producNew);
router.post('/products/new', upload.single('imgProduct'),productoControllers.productProcessImg);
router.get('/products/edit', productoControllers.producEdit);

//Registro
router.get('/register', mainControllers.registrar);
router.post('/register',validations, mainControllers.processRegister);

//Login
router.get('/login', mainControllers.login);
router.post('/login',validations,mainControllers.processLogin);

router.get('/cart', productoControllers.productCart);
router.get('/detail', productoControllers.producDetalle);
/*router.get('/products/add', productoControllers.productAdd);*/





module.exports = router;