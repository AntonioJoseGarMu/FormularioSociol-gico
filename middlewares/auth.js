'use strict'

const services = require('../service');

function isAuth (req, res, next){
    if(!req.headers.authorization) {
        return res.status(403).send({message: 'No tienes autorización'});
    }

    const token = req.headers.authorization.split(" ")[1];

    services.decodeToken(token)
        .then(response => {
            req.user = response
            // req.user = response[0]
            // if (req.method == 'POST' && response[1] == 'alumno') {
            //     next()
            // } else if (req.method == 'GET' && response[1] == 'admin') {
            //     next()
            // } else {
            //  return res.status(403).send({message: 'No tienes autorización'});
            // }
            next()
        })
        .catch(response => {
            return res.status(response.status).send({message:response.message})
        })
}

module.exports = isAuth;