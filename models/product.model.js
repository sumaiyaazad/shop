const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    titleEn: { type: String, },
    titleAr: { type: String, },
    descriptionEn: { type: String, },
    descriptionAr: { type: String, },
    price: { type: Number, },
    discount: { type: Number, },
    status: { type: Boolean, default: true, },
    images: [{ type: String, },],
    specification: { type: Object, },
    sku: { type: Number, default: 0, },
    promotion: { type: Boolean, },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
