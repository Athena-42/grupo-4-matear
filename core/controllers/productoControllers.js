const path = require('path')
const {validationResult} = require('express-validator');

const  productoControllers = {
    producNew: (req,res)=>{
        res.render(path.resolve('./views/producto/productNew'))
    },
    producDetalle: (req,res)=>{
        res.render(path.resolve('./views/producto/productDetail'))
    },
    producEdit: (req,res)=>{
        res.render(path.resolve('./views/producto/productEdit'))
    },
    productCart: (req,res)=>{
        res.render(path.resolve('./views/producto/productCart'))
    },
    productProcessImg: (req,res)=>{
        console.log(req.file);
        const resultValidation = validationResult(req);
        res.send(resultValidation);
        //res.send('Archivo subido correctamente');
    }

} 


module.exports = productoControllers;