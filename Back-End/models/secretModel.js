const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const secretSchema = new Schema({
    userName: {
        type: String
    },
    password: {
        type: String
    },
});

module.exports = mongoose.model("secretModel", secretSchema, 'secret');