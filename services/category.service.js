const fs = require('fs');
const path = require('path');
const CategoryModel = require('../models/category.model');

module.exports = {
    getAllCategories: async () => {
        return CategoryModel.find({});
    },
    createCategory: async (data) => {
        const category = new CategoryModel(data);
        return category.save();
    },
    updateCategory: async (categoryId, data) => {
        const category = await CategoryModel.findById(categoryId);
        //Delete previous file
        if (data.image && category.image) {
            fs.unlinkSync(path.resolve(category.image));
        }
        return CategoryModel.findByIdAndUpdate(categoryId, data, { new: true });
    },
    deleteCategory: async (categoryId) => {
        await CategoryModel.findByIdAndDelete(categoryId);
        return true;
    }
}