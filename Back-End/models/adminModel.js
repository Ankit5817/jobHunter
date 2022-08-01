const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    jobId: {
        type: String,
        required: true
    },
    userId: [
        String
    ],
});

module.exports = mongoose.model("adminModel", adminSchema, 'admins');