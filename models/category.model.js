const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema(
    {
        nameEn: { type: String },
        nameAr: { type: String },
        image: { type: String }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Category', categorySchema);