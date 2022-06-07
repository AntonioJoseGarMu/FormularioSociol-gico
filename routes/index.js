'use strict';

const express = require('express');
const EncuestaCtrl = require('../controllers/encuesta')
const userCtrl = require('../controllers/user');
const auth = require('../middlewares/auth');
const api = express.Router();

// api.get('/product', ProductCtrl.getProducts);
api.get('/encuesta/:encuestasId', auth, EncuestaCtrl.getEncuestas);
api.post('/encuesta', auth, EncuestaCtrl.saveEncuesta);
api.get('/allEncuestas', auth, EncuestaCtrl.getAllEncuestas);
// api.put('/product/:productId', ProductCtrl.updateProduct);
// api.delete('/product/:productId', ProductCtrl.deleteProduct);
api.post('/signup', userCtrl.signUp);
api.post('/signin', userCtrl.signIn);
api.get('/users', auth, userCtrl.getUsers);
api.get('/private', auth, function(req, res){
    res.status(200).send({message: 'Tienes acceso'})
})

module.exports = api;