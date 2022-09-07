const path = require('path')
const  productoControllers = {
    producNew: (req,res)=>{
        res.render(path.resolve('./views/producto/productNew'))
    },
    producDetalle: (req,res)=>{
        res.render(path.resolve('./views/producto/productDetail'))
    },
    productCart: (req,res)=>{
        res.render(path.resolve('./views/producto/productCart'))
    }

} 


module.exports = productoControllers;