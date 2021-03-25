const SpecificationModel = require('../models/specification.model');

module.exports = {
    getSpecifications: async () => {
        return SpecificationModel.find({});
    },
    createSpecification: async (data) => {
        const specification = new SpecificationModel(data);
        return specification.save();
    },
    updateSpecification: async (specificationId, data) => {
        return SpecificationModel.findByIdAndUpdate(specificationId, data, { new: true });
    },
    deleteSpecification: async (specificationId) => {
        await SpecificationModel.findByIdAndDelete(specificationId);
        return true;
    }
}