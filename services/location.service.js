const LocationModel = require('../models/location.model');

module.exports = {
    getAllLocations: async () => {
      return LocationModel.find({});
    },
    createLocation: async (data) => {
        const location = new LocationModel(data);
        return location.save();
    },
    updateLocation: async (locationId, data) => {
        return LocationModel.findByIdAndUpdate(locationId, data, { new: true });
    },
    deleteLocation: async (locationId) => {
        await LocationModel.findByIdAndDelete(locationId);
        return true;
    }
}