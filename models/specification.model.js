const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specificationSchema = new Schema(
  {
    name: { type: String },
    values: { type: Object },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Specification', specificationSchema);
