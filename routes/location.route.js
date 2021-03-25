const locationController = require('../controllers/location.controller');

const locationRoutes = (app, router) => {
    router.get('/locations', locationController.getAllLocations);

    router.post('/locations', locationController.createLocation);
    router.put('/locations/:locationId', locationController.updateLocation);
    router.delete('/locations/:locationId', locationController.deleteLocation);

    return router;
};

module.exports = locationRoutes;