const path = require('path');
const fs = require('fs');
const products = fs.readFileSync('./data/productsDataBase.json');

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

}


module.exports = mainControllers;