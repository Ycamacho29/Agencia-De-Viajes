import { Result } from "pg";
import { Viaje } from "../models/Viaje.js";
import { Testimonio } from "../models/Testimonios.js";

const paginaInicio = async (request, response) => {
    // Consultar al BBDD

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}));
    promiseDB.push(Testimonio.findAll({limit: 3}));

    try {
        const resultado = await Promise.all(promiseDB); 

        response.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1],
        });
    } catch (error) {
        console.error(error);
    }
}

const paginaNosotros = (request, response) => {
    response.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (request, response) => {
    // Consultar BBDD
    const viajes = await Viaje.findAll();

    response.render('viajes', {
        pagina: 'Viajes',
        viajes: viajes,
    });
}

const paginaDetalleViaje = async (request, response) => {
    const { viaje } = request.params;

    try {
        const detalleViaje = await Viaje.findOne({ where: { slug: viaje } });
        response.render('viaje', {
            pagina: 'Detalle del Viaje',
            data: detalleViaje,
        });
    } catch (error) {
        console.error(error);
    }
}

const paginaTestimoniales = async (request, response) => {
    try {
        // Consultar BBDD
        const testimonios = await Testimonio.findAll();

        response.render('testimoniales', {
            pagina: 'Testimoniales',
            testimonios: testimonios,
        });
    } catch (error) {
        console.error(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}