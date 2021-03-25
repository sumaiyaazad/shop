const cityService = require('../services/city.service');
module.exports = {
    getCity: async (req, res) => {
        try {
            const data = await cityService.getCity();
            console.log(data)
            return res.json({
                error: false,
                data: data
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    createCity: async (req, res) => {
        try {
            const { body } = req;
            console.log(req);
            const data = await cityService.createCity(body);
            return res.json({
                error: false,
                data: data
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    updateCity: async (req, res) => {
        try {
            const { params: { cityId }, body } = req;
            const data = await cityService.updateCity(cityId, body);
            return res.json({
                error: false,
                data: data
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
    deleteCity: async (req, res) => {
        try {
            const { params: { cityId } } = req;
            const data = await cityService.deleteCity(cityId);
            return res.json({
                error: false,
                data: data
            });
        } catch (error) {
            return res.status(400).json({ error: true, message: error.message });
        }
    },
}