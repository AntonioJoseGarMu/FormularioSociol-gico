'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const UserSchema = new Schema( {
    email: { type: String, unique: true, lowercase: true },
    displayName: String,
    password: String,
    singupDate: { type: Date, default: Date.now() },
    lastLogin: Date
})

UserSchema.pre('save', function(next) {
    let user = this
    if (!user.isModified('password')) return next()

        bcrypt.hash(user.password, saltRounds, (err, hash) => {
            if(err) return next(err);

            user.password = hash;
            next()
        })
        bcrypt.compare(user.password, hash, (err, result) => {
            if(err) return err;
            result == true;
        })
})

module.exports = mongoose.model('User', UserSchema);
