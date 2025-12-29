import express from 'express';

const router = express.Router();

// request -> Lo que enviamos al servidor de Express
// response -> Lo que el servidor de Express de responde 
router.get('/', (request, response) => {
    response.render('inicio', {
        pagina: 'Inicio'
    });
});

router.get('/nosotros', (request, response) => {
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
});

router.get('/viajes', (request, response) => {
    response.render('viajes', {
        pagina: 'Viajes'
    });
});

router.get('/testimoniales', (request, response) => {
    response.render('testimoniales', {
        pagina: 'Testimoniales'
    });
});


export default router;