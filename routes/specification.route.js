const specificationController = require('../controllers/specification.controller');

const specificationRoutes = (app, router) => {
    router.get('/specifications', specificationController.getSpecifications);
    router.post('/specifications', specificationController.createSpecification);
    router.put('/specifications/:specificationId', specificationController.updateSpecification);
    router.delete('/specifications/:specificationId', specificationController.deleteSpecification);
    return router;
};

module.exports = specificationRoutes;