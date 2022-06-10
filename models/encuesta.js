'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 7 preguntas encuesta
const EncuestaSchema = Schema({
    nombre: String,
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
    pregunta511: String,
    pregunta512: String,
    pregunta521: String,
    pregunta522: String,
    pregunta531: String,
    pregunta532: String,
    pregunta6: String,
    pregunta7: String
})

module.exports = mongoose.model('Encuesta', EncuestaSchema);