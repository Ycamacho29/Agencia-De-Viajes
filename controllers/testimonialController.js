import { Testimonio } from "../models/Testimonios.js";

const guardarTestimonial = async (request, response) => {
    // Validar Datos del Formulario
    const { nombre, correo, mensaje } = request.body;

    const errores = [];

    if (nombre.trim() === '') {
        errores.push({ mensaje: "El Nombre esta Vacio" });
    }

    if (correo.trim() === '') {
        errores.push({ mensaje: "El Correo esta Vacio" });
    }

    if (mensaje.trim() === '') {
        errores.push({ mensaje: "El Mensaje esta Vacio" });
    }

    if (errores.length > 0) {

        // Consultar BBDD
        const testimonios = await Testimonio.findAll();

        // Mostrar la Vista con los Errores
        response.render('testimoniales', {
            pagina: 'Testimoniales',
            data: testimonios,
            errores,
            nombre,
            correo,
            mensaje
        });
    } else {
        // Almacenarlo en la BBDD
        try {
            await Testimonio.create({
                nombre,
                correo,
                mensaje,
            });

            response.redirect('/testimoniales');
        } catch (error) {
            console.error(error);
        }
    }
}

export { guardarTestimonial }