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

const app = express();

// Definir Puerto
const port = process.env.PORT || 4000;

// Agregar Router
app.use("/", router);

app.listen(port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`);
});



