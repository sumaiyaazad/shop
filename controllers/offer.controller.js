const offerService = require('../services/offer.service');
const { moveFile } = require('../utils/helpers');

module.exports = {
    getAllOffers: async (req, res) => {
        try {
            const offers = await offerService.getAllOffers();
            return res.json({
                error: false,
                data: offers
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    createOffer: async (req, res) => {
        try {
            const { body, file } = req;
            if (file) {
                body.image = await moveFile(file, 'offer');
            }
            const offer = await offerService.createOffer(body);
            return res.json({
                error: false,
                data: offer
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    updateOffer: async (req, res) => {
        try {
            const { params: { offerId }, body, file } = req;
            if (file) {
                body.image = await moveFile(file, 'offer');
            }
            const offer = await offerService.updateOffer(offerId, body);
            return res.json({
                error: false,
                data: offer
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    deleteOffer: async (req, res) => {
        try {
            const { params: { offerId } } = req;
            const offer = await offerService.deleteOffer(offerId);
            return res.json({
                error: false,
                data: offer
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    getOffersNewestNonExpired: async (req, res) => {
        try {
            const offers = await offerService.getOffersNewestNonExpired();
            return res.json({
                error: false,
                data: offers
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    }
}