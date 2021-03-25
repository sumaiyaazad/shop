const categoryService = require('../services/category.service');
const { moveFile } = require('../utils/helpers');
module.exports = {
    getAllCategories: async (req, res) => {
        try {
            const categories = await categoryService.getAllCategories();
            return res.json({
                error: false,
                data: categories
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    createCategory: async (req, res) => {
        //log
        console.log("create category 1")
        try {
            const { body, file } = req;
            if (file) {
                 //log
                console.log("create category 2")
                body.image = await moveFile(file, 'category');
            }
            const category = await categoryService.createCategory(body);
             //log
            console.log("create category 3")
            return res.json({
                error: false,
                data: category
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    updateCategory: async (req, res) => {
        try {
            const { params: { categoryId }, body, file } = req;
            if (file) {
                body.image = await moveFile(file, 'category');
            }
            const category = await categoryService.updateCategory(categoryId, body);
            return res.json({
                error: false,
                data: category
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const { params: { categoryId } } = req;
            const category = await categoryService.deleteCategory(categoryId);
            return res.json({
                error: false,
                data: category
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
}