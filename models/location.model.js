const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    nameAr: { type: String },
    nameEn: { type: String },
    lat: { type: String },
    lng: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Location', locationSchema);