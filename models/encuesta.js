'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 7 preguntas encuesta
const EncuestaSchema = Schema({
    idUsuario: String,
    codigoEncuesta: String,
    pregunta11: String,
    pregunta12: String,
    pregunta13: String,
    pregunta21: String,
    pregunta22: String,
    pregunta23: String,
    pregunta31: String,
    pregunta32: String,
    pregunta33: String,
    pregunta41: String,
    pregunta42: String,
    pregunta43: String,
})

module.exports = mongoose.model('Encuesta', EncuestaSchema);