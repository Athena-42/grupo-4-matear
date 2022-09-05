const path = require('path')
const mainControllers = {
    index: (req,res)=>{
        res.render(path.resolve('./views/usuario/home'))
    },
    registrar: (req,res)=>{
        res.render(path.resolve('./views/usuario/registro'))
    },
    login: (req,res)=>{
        res.render(path.resolve('./views/usuario/login'))
    },

}


module.exports = mainControllers;