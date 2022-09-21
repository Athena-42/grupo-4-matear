const path = require('path')


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
        res.send('Archivo subido correctamente');
    }

} 


module.exports = productoControllers;