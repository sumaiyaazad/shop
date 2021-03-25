const CityModel = require('../models/city.model');

module.exports = {
    getCity: async () => {
        return CityModel.find({});
    },
    createCity: async (data) => {
        console.log(data);
        const city = new CityModel(data);
        return city.save();
    },
    updateCity: async (cityId, data) => {
        await CityModel.findByIdAndUpdate(cityId, data, { new: true });
        return true;
    },
    deleteCity: async (cityId) => {
        await CityModel.findByIdAndDelete(cityId);
        return true;
    }
}