'use strict'

const Encuesta = require('../models/encuesta');

// Guardar encuesta
function saveEncuesta(req, res) {

    let encuesta = new Encuesta();
    encuesta.idUsuario = req.body.idUsuario;
    encuesta.codigoEncuesta = req.body.codigoEncuesta;
    encuesta.pregunta1 = req.body.pregunta1;
    encuesta.pregunta2 = req.body.pregunta2;
    encuesta.pregunta3 = req.body.pregunta3;
    encuesta.pregunta4 = req.body.pregunta4;
    encuesta.pregunta5 = req.body.pregunta5;
    encuesta.pregunta6 = req.body.pregunta6;
    encuesta.pregunta7 = req.body.pregunta7;

    encuesta.save((err, encuestaStored) => {
        if (err) res.status(500).send({ message: `Error al salvar en la base de datos ${err}` });

        res.status(200).send({ encuesta: encuestaStored })
    });
}

// Coger encuestas con id
function getEncuestas(req, res) {
    let idEncuesta = req.params.idEncuesta;

    res.status(200).send({message: `Las encuestas con código ${idEncuesta}`})
}

// Coger todas las encuestas
function getAllEncuestas(req, res) {
    Encuesta.find({}, (err, encuestas) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición ${err}` });
        if (!encuestas) return res.status(404).send({ message: `No existen encuestas` });

        res.send(200, { encuestas })
    })
}

module.exports = {
    saveEncuesta,
    getEncuestas,
    getAllEncuestas
}

