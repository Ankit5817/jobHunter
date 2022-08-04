const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    _id: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    wishlist: [String],
    gender: {
        type: String
    },
    location: {
        type: String
    },
    jobProfile: {
        type: String
    },
    qualification: {
        type: String
    },
    experience: {
        type: String
    },
    phone: {
        type: String
    },
    brief: {
        type: String
    },
    appliedJobs: [String]
});

module.exports = mongoose.model("userModel", userSchema, 'Users');