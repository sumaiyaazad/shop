const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema(
    {
        paymentData: { type: Object }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Payment', paymentSchema);