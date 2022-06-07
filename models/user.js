'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    displayName: String,
    password: String,
    role: {
        type: String,
        enum: ['admin', 'alumno'],
        default: 'alumno'
    },
    singupDate: { type: Date, default: Date.now() },
    lastLogin: Date
})

UserSchema.pre('save', function (next) {
    bcrypt.genSalt(10).then(salts => {
        bcrypt.hash(this.password, salts).then(hash => {
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
});

module.exports = mongoose.model('User', UserSchema);
