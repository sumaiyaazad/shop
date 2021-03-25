const offerController = require('../controllers/offer.controller');

const offerRoutes = (app, router) => {
    router.get('/offers', offerController.getAllOffers);
    router.get('/offers/new', offerController.getOffersNewestNonExpired);


    router.post('/offers', app.upload.single('image'), offerController.createOffer);
    router.put('/offers/:offerId', app.upload.single('image'), offerController.updateOffer);
    router.delete('/offers/:offerId', offerController.deleteOffer);

    return router;
};

module.exports = offerRoutes;