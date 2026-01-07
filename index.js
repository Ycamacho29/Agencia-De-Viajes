// Sintaxis Common JS
/* const express = require('express');

const app = express();

// Definir Puerto
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});
 */

// Sintaxis con Imports y Exports
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar a la Base de Datos
db.authenticate()
    .then(() => { console.log('Base de Datos Conectada')})
    .catch(error => {console.error(error)});

// Definir Puerto
const port = process.env.PORT || 4000;

// Habilitar El Motor de Plantillas (PUG)
app.set('view engine', 'pug');

// Obtener el año actual
app.use((request, response, next) => {
    const year = new Date();

    response.locals.actualYear = year.getFullYear();
    response.locals.nombreSitio = "Agencia de Viajes";

    next();
});

// Agregar Body Parser para leer los Datos de los Formularios
app.use(express.urlencoded({extended: true}));

// Definir la Carpeta Publica
app.use(express.static('public'));

// Agregar Router
app.use("/", router);

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});



