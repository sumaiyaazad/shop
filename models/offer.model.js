const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    startDate: { type: Date },
    endDate: { type: Date },
    image: { type: String }
}, {
    timestamps: true
});

module.exports = mongoose.model('Offer', offerSchema);