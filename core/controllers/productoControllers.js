const path = require('path');
const fs = require('fs');
const products = fs.readFileSync(path.join(__dirname,'../data/productsDataBase.json'));
const User = require('../models/User');
const users = fs.readFileSync(path.join(__dirname,'../data/userDataBase.json'));
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator');
const { json } = require('express');

const  productoControllers = {
    producNew: (req,res)=>{
        res.render(path.resolve('./views/producto/productNew'))
    },
    producDetalle: (req,res)=>{
        let productosJSON = fs.readFileSync('./data/productsDataBase.json', {encoding: 'utf-8'});
        let productos = JSON.parse(productosJSON)

        res.render('../views/producto/productDetail', {'productos': productos})
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



