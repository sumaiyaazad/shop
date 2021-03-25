const locationService = require('../services/location.service');

module.exports = {
    getAllLocations: async (req, res) => {
        try {
            const locations = await locationService.getAllLocations();
            return res.json({
                error: false,
                data: locations
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    createLocation: async (req, res) => {
        try {
            const { body } = req;
            const location = await locationService.createLocation(body);
            return res.json({
                error: false,
                data: location
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    updateLocation: async (req, res) => {
        try {
            const { params: { locationId }, body } = req;
            const location = await locationService.updateLocation(locationId, body);
            return res.json({
                error: false,
                data: location
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    deleteLocation: async (req, res) => {
        try {
            const { params: { locationId } } = req;
            const location = await locationService.deleteLocation(locationId);
            return res.json({
                error: false,
                data: location
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
}