const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        products: [
            {
                product: { type: Schema.Types.ObjectId, ref: 'Product' },
                qty: { type: Number },
                price: { type: Number },
                total: { type: Number },
                specification: [{ type: Object }],
            }
        ],
        orderDate: { type: Date },
        amount: { type: Number },
        userName: { type: String },
        phone: { type: String },
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        city: { type: Schema.Types.ObjectId, ref: 'City' },
        location: { type: Schema.Types.ObjectId, ref: 'Location' },
        shipping: { type: Schema.Types.ObjectId, ref: 'Shipping' },
        comment: { type: String },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Order', orderSchema);