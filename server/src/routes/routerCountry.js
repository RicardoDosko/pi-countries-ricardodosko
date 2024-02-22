const { Router } = require('express')

const { getAllCountriesHandler, getCountryByIdHandler } = require('../handlers/countriesHandler')

const router = Router();

router.get('/', getAllCountriesHandler)
router.get('/:id', getCountryByIdHandler)
router.get('/name', getAllCountriesHandler)

module.exports = router;