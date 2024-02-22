const { getAllCountries, getCountryById } = require('../controllers/countriesControllers');

const getAllCountriesHandler = async(req, res) => {
    let { name } = req.query;
    try {
        if (name) {
            const response = await getAllCountries(name);
            return res.status(200).send(response);
        }
        const response = await getAllCountries();
        res.status(200).send(response);
    } catch (error) {
        console.log("error", error)
        res.status(400).send({ error: error.message });
    }
}

const getCountryByIdHandler = async(req, res) => {
    let { id } = req.params;
    try {
        if (id) {
            const response = await getCountryById(id);
            res.status(200).send(response);
        }
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
}

module.exports = {
    getAllCountriesHandler,
    getCountryByIdHandler,
}