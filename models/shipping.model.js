const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippingSchema = new Schema(
    {
        nameEn: { type: String },
        nameAr: { type: String },
        cost: { type: Number }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Shipping', shippingSchema);