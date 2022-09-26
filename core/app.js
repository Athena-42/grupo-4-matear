const express = require('express');
const app = express();
const path = require('path');
const router = require ('./routers/mainRouters');
const multer = require ('multer');
const session = require ('express-session');
const cookieParser = require('cookie-parser')

var storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'public/images/uploads')
    },
    filename: function (req,file,cb){
        cb(null,file.fieldname +'-'+Date.now()+ path.extname(file.originalname))
    }
}
);
var upload = multer({storage: storage});



app.use(express.static('/public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(router);
app.use(cookieParser());

app.use(session({secret: 'Nombre del Sitio',
resave: false,
saveUninitialized: true}))

app.listen(3000, ()=> console.log("El servidor está corriendo en el puerto 3000"));