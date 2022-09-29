const path = require('path');
const fs = require('fs');
const products = fs.readFileSync('./data/productsDataBase.json');
const users = fs.readFileSync(path.join(__dirname,'../data/userDataBase.json'));
const bcrypt = require('bcryptjs')
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
    processLogin: (req,res)=>{
        let errores = validationResult(req);
        //console.log (errores)
        let usuarios = JSON.parse(users)
        console.log(errores)
        if (!errores.isEmpty()){
            res.render(path.resolve('./views/usuario/login'),{mensajesDeError: errores.array()})
            console.log('Ingrese por acá')
            
        }else{
            res.render(path.resolve('./views/usuario/login'))
            let usuExiste = usuarios.find(usuRegistrado => usuRegistrado.email == req.body.email)
            
            if (usuExiste != undefined)
            {
                let passUsu = usuExiste.password;
                if ( bcrypt.compareSync(req.body.password,passUsu)){
                    console.log('Success');

                }else{
                    res.render(path.resolve('./views/usuario/login'));
                }
            }else{
                //let advertencia = validationResult(req);
                /*advertencia.errors.push( {credenciales: {
                    value: '100',
                    msg: 'Credenciales Invalidas',
                    param: 'email',
                    location: 'body'
                  }});
                  console.log(advertencia)*/

                  let avisoCred = validationResult(req);
                  avisoCred.errors.push( {
                    value: '100',
                    msg: 'Credenciales Invalidas',
                    param: 'email',
                    location: 'body'
                  });
                res.render(path.resolve('./views/usuario/login'),{avisoCred: avisoCred.array()})}
        }
        //res.send('Succes!');
        
        //res.render(path.resolve('./views/usuario/login'))
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