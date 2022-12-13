const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('confPassword').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('nombreProduct').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('descProduct').notEmpty().withMessage('Tienes que escribir una descripción al producto'),
    body('categoria').notEmpty().withMessage('Debes elegir una categoria'),
    body('precProduct').notEmpty().withMessage('Tienes que escribir un precio'),


    // body('avatar').custom((value, { req }) =>{
    //     let file = req.file;
    //     let acceptedExtensions = ['.jpg', '.png', '.gif'];

    //     if (!file){
    //         throw new Error('Tienes que subir una imagen');
    //     } else{
    //         let fileExtension = path.extname(file.originalname);
    //         if(!acceptedExtensions){
    //             throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
    //         }
    //     }
    //     return true;
    // })
]