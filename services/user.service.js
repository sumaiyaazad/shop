const UserModel = require('../models/user.model');

module.exports = {
    getAllUsers: async () => {
        return UserModel.find({});
    },
    createUser: async (data) => {
        const user = new UserModel(data);
        return user.save();
    },
    updateUser: async (userId, data) => {
        return UserModel.findByIdAndUpdate(userId, data, { new: true });
    },
    deleteUser: async (userId) => {
        await UserModel.findByIdAndDelete(userId);
        return true;
    }
}