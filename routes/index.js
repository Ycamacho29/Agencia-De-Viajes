import express from 'express';

const router = express.Router();

// request -> Lo que enviamos al servidor de Express
// response -> Lo que el servidor de Express de responde 
router.get('/', (request, response) => {
    response.send('Inicio');
});

router.get('/nosotros', (request, response) => {
    response.send('Nosotros');
});

router.get('/contacto', (request, response) => {
    response.send('Contacto');
});

export default router;