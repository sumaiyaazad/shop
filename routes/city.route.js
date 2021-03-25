const cityController = require('../controllers/city.controller');

const cityRoutes = (app, router) => {
    router.get('/city', cityController.getCity);
    router.post('/city', cityController.createCity);
    router.put('/city/:cityId', cityController.updateCity);
    router.delete('/city/:cityId', cityController.deleteCity);
    return router;
};

module.exports = cityRoutes;