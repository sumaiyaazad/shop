const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String },
        phone: { type: String },
        email: { type: String },
        username: { type: String },
        auth0Id: { type: String }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);