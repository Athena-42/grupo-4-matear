const express = require('express');
const app = express();
const path = require('path');
const router = require ('./routers/mainRouters');

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(router);
app.listen(3000, ()=> console.log("El servidor está corriendo en el puerto 3000"));