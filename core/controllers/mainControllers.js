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
        if (!errores.isEmpty()){
            res.render(path.resolve('./views/usuario/login'),{mensajesDeError: errores.array()})
            console.log(errores)
        }else{
            res.render(path.resolve('./views/usuario/login'))
            let usuExiste = usuarios.find(usuRegistrado => usuRegistrado.email == req.body.email)
            
            if (usuExiste != undefined)
            {
                let passUsu = usuExiste.password;
                if ( bcrypt.compareSync(req.body.password,passUsu)){
                    console.log('Success');

                }else{
                    let advertencia = {errors: [
                        {
                          value: '',
                          msg: 'Credenciales invalidas',
                          param: 'email',
                          location: 'body'
                        }]}

                    console.log('Erroneo');
                    res.render(path.resolve('./views/usuario/login'));
                }
            }else{
                res.render(path.resolve('./views/usuario/login'));
            }
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