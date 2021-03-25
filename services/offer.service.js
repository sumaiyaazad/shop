const fs = require('fs');
const path = require('path');

const OfferModel = require('../models/offer.model');

module.exports = {
    getAllOffers: async () => {
        return OfferModel.find({});
    },
    createOffer: async (data) => {
        const offer = new OfferModel(data);
        return offer.save();
    },
    updateOffer: async (offerId, data) => {
        const offer = await OfferModel.findById(offerId);
        if (data.image && offer.image) {
            fs.unlinkSync(offer.image);
        }
        return OfferModel.findByIdAndUpdate(offerId, data, { new: true });
    },
    deleteOffer: async (offerId) => {
        await OfferModel.findByIdAndDelete(offerId);
        return true;
    },
    getOffersNewestNonExpired: async () => {
        return OfferModel.aggregate([
            { $match: { expireDate: { $gte: new Date() } } },
            { $sort: { createDate: -1 } }
        ]).exec();
    }
}