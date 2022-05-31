'use strict'

const Encuesta = require('../models/encuesta');

// Guardar encuesta
function saveEncuesta(req, res) {

    let encuesta = new Encuesta();
    encuesta.idUsuario = req.body.idUsuario;
    encuesta.codigoEncuesta = req.body.codigoEncuesta;
    encuesta.pregunta11 = req.body.pregunta11;
    encuesta.pregunta12 = req.body.pregunta12;
    encuesta.pregunta13 = req.body.pregunta13;
    encuesta.pregunta21 = req.body.pregunta21;
    encuesta.pregunta22 = req.body.pregunta22;
    encuesta.pregunta23 = req.body.pregunta23;
    encuesta.pregunta31 = req.body.pregunta31;
    encuesta.pregunta32 = req.body.pregunta32;
    encuesta.pregunta33 = req.body.pregunta33;
    encuesta.pregunta41 = req.body.pregunta41;
    encuesta.pregunta42 = req.body.pregunta42;
    encuesta.pregunta43 = req.body.pregunta43;
    encuesta.pregunta511 = req.body.pregunta511;
    encuesta.pregunta512 = req.body.pregunta512;
    encuesta.pregunta521 = req.body.pregunta521;
    encuesta.pregunta522 = req.body.pregunta522;
    encuesta.pregunta531 = req.body.pregunta531;
    encuesta.pregunta532 = req.body.pregunta532;
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

