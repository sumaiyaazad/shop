const specificationService = require('../services/specification.service');

module.exports = {
    getSpecifications: async (req, res) => {
        try {
            const specifications = await specificationService.getSpecifications();
            return res.json({
                error: false,
                data: specifications
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    createSpecification: async (req, res) => {
        try {
            const { body } = req;
            const specification = await specificationService.createSpecification(body);
            return res.json({
                error: false,
                data: specification
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    updateSpecification: async (req, res) => {
        try {
            const { params: { specificationId }, body } = req;
            const specification = await specificationService.updateSpecification(specificationId, body);
            return res.json({
                error: false,
                data: specification
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    deleteSpecification: async (req, res) => {
        try {
            const { params: { specificationId } } = req;
            const specification = await specificationService.deleteSpecification(specificationId);
            return res.json({
                error: false,
                data: specification
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
}