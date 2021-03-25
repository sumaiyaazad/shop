const ProductModel = require('../models/product.model');

module.exports = {
    getAllProducts: async () => {
        console.log("inside get all products");
        return ProductModel.find({}).populate('category');
    },
    createProduct: async (data) => {
        const product = new ProductModel(data);
        return product.save();
    },
    updateProduct: async (productId, data) => {
        return ProductModel.findByIdAndUpdate(productId, data, { new: true });
    },
    deleteProduct: async (productId) => {
        await ProductModel.findByIdAndDelete(productId);
        return true;
    },
    getProductsLowToHigh: async () => {
        return ProductModel.aggregate([
            { $match: { status: true } },
            { $sort: { price: 1 } }
        ]).exec();
    },
    getProductsHighDiscount: async () => {
        return ProductModel.aggregate([
            { $match: { status: true } },
            { $sort: { discount: -1 } }
        ]).exec();
    },
    getProductsNewest: async () => {
        const result = await ProductModel.aggregate([
            { $match: { status: true } },
            { $sort: { createdAt: -1 } }
        ]);
        return await ProductModel.populate(result, { path: "category" });
    },
    getProductsByCategoryId: async (categoryId) => {
        const result = await ProductModel.aggregate([
            { $match: { status: true, category: categoryId } },
            { $sort: { createdAt: -1 } }
        ]);
        return await ProductModel.populate(result, { path: "category" });
    },
    getProductsByCategoryLowToHigh: async (categoryId) => {
        return ProductModel.aggregate([
            { $match: { status: true, category: categoryId } },
            { $sort: { price: 1 } }
        ]).exec();
    },
    getProductsByCategoryHighDiscount: async (categoryId) => {
        return ProductModel.aggregate([
            { $match: { status: true, category: categoryId } },
            { $sort: { discount: -1 } }
        ]).exec();
    },
    getProductsByCategoryNewest: async () => {
        return ProductModel.aggregate([
            {
                $lookup: {
                    from: 'Category',
                    localField: 'category',
                    foreignField: '_id',
                    as: 'categoryData'
                }
            },
            { $unwind: '$categoryData' },
            { $sort: { 'categoryData.createdAt': -1 } }
        ]).exec();
    }
}