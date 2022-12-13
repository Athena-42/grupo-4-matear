const path = require('path');
const fs = require('fs');
const products = fs.readFileSync(path.join(__dirname,'../data/productsDataBase.json'));
const User = require('../models/User');
const users = fs.readFileSync(path.join(__dirname,'../data/userDataBase.json'));
const bcrypt = require('bcryptjs')
const {validationResult} = require('express-validator');
const { json } = require('express');
let db = require('../database/models')



const mainControllers = {
    index: (req,res)=>{
        
        res.render('../views/usuario/home')
    },
    todosProducts: (req, res) =>{
        // let productosJSON = fs.readFileSync('./data/productsDataBase.json', {encoding: 'utf-8'});
        // let productos = JSON.parse(productosJSON)

        // res.render('../views/producto/allProducts', {'productos': productos})
        db.Productos.findAll()
            .then(function (productos){
                res.render('producto/allProducts', {productos})
            })

    },
    registrar: (req,res)=>{
        res.render(path.resolve('./views/usuario/registro'))

    },

    processRegister: (req, res) =>{
        
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render('usuario/registro', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
        // let userInDB = User.findByField('email', req.body.email);
        // if(userInDB){
        //     return res.render('usuario/registro', {
        //                 errors: {
        //                     email: {
        //                         msg: 'Este email ya está registrado'
        //                     }
        //                 },
        //                 oldData: req.body
        //             })
        // }
        // let userToCreate = {
        //     ...req.body,
        //     password: bcrypt.hashSync(req.body.password, 10)
        // }
        // User.create(userToCreate)
    },
    login: (req,res)=>{
        res.render(path.resolve('./views/usuario/login'))
    },
    processLogin: (req,res)=>{
        const resultValidation = validationResult(req);

        if(resultValidation.errors.length > 0){
            return res.render('usuario/login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }




        // let errores = validationResult(req);
        // //console.log (errores)
        // let usuarios = JSON.parse(users)
        // console.log(errores)
        // if (!errores.isEmpty()){
        //     res.render(path.resolve('./views/usuario/login'),{mensajesDeError: errores.array()})
        //     console.log('Ingrese por acá') 
            
        // }else{
        //     res.render(path.resolve('./views/usuario/login'))
        //     let usuExiste = usuarios.find(usuRegistrado => usuRegistrado.email == req.body.email)
            
        //     if (usuExiste != undefined)
        //     {
        //         let passUsu = usuExiste.password;
        //         if ( bcrypt.compareSync(req.body.password,passUsu)){
        //             console.log('Success');

        //         }else{
        //             res.render(path.resolve('./views/usuario/login'));
        //         }
        //     }else{

                
        //         //let advertencia = validationResult(req);
        //         /*advertencia.errors.push( {credenciales: {
        //             value: '100',
        //             msg: 'Credenciales Invalidas',
        //             param: 'email',
        //             location: 'body'
        //           }});
        //           console.log(advertencia)*/

        //           let avisoCred = validationResult(req);
        //           avisoCred.errors.push( {
        //             value: '100',
        //             msg: 'Credenciales Invalidas',
        //             param: 'email',
        //             location: 'body'
        //           });
        //         res.render(path.resolve('./views/usuario/login'),{avisoCred: avisoCred.array()})}
        // }
        //res.send('Succes!');
        
        //res.render(path.resolve('./views/usuario/login'))
    },
    // insertarUsu: (req,res)=>{
    //     let errores = validationResult(req);
    //     //console.log(errores)
    //     if (!errores.isEmpty()){
    //         console.log('paso por acà')
    //         return res.render(path.resolve('./views/usuario/registro'),{mensajesDeError: errores.array()})
    //     }
    //     //res.render(path.resolve('./views/usuario/registro'))
    // },
    //Sprint 6 Base de Datos
    

}


module.exports = mainControllers;