const path = require('path')
//const {validationResult} = require('express-validator');
//const { ValidatorsImpl } = require('express-validator/src/chain');

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
        /*let errors =  validationResult(req);
        //res.send(errores)
        console.log(errors);        
        res.render(path.resolve('./views/producto/productNew'), {errors: errors.mapped(),old: req.body});*/
        
    }

} 


module.exports = productoControllers;