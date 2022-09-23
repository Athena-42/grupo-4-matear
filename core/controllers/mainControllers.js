const path = require('path');
const fs = require('fs');
const products = fs.readFileSync('./data/productsDataBase.json');
const {validationResult} = require('express-validator')
const mainControllers = {
    index: (req,res)=>{
        productos = JSON.parse(products);
        
        res.render(path.resolve('./views/usuario/home'),{products: productos})
    },
    registrar: (req,res)=>{
        res.render(path.resolve('./views/usuario/registro'))
    },
    login: (req,res)=>{
        res.render(path.resolve('./views/usuario/login'))
    },
    insertarUsu: (req,res)=>{
        let errores = validationResult(req);
        //console.log(errores)
        if (!errores.isEmpty()){
            console.log('paso por acà')
            return res.render(path.resolve('./views/usuario/registro'),{mensajesDeError: errores.array()})
        }
        //res.render(path.resolve('./views/usuario/registro'))
    }

}


module.exports = mainControllers;