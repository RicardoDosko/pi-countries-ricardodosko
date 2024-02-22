const { Activity, Country } = require('../db')
const axios = require('axios')

const getCountriesDB = async() => {
    const allCountriesDB = await Country.findAll()
    return allCountriesDB
}

const getCountriesApi = async() => {
    try {
        const api = await axios.get('http://localhost:5000/countries');
        const countries = api.data; // Suponiendo que la respuesta de la API es un arreglo de países

        // Mapeamos los datos de cada país
        const getCountryPromises = countries.map(async(c) => {
            return {
                id: c.ccn3,
                nombre: c.name.official,
                img_band: c.flags.png,
                continente: c.continents[0],
                capital: Array.isArray(c.capital) && c.capital.length > 0 ? c.capital[0] : "",
                subregion: c.subregion,
                area: c.area,
                poblacion: c.population,
                mapa: c.maps.googleMaps
            };
        });

        // Esperamos a que todas las promesas se resuelvan
        const getCountry = await Promise.all(getCountryPromises);

        return getCountry;
    } catch (error) {
        throw new Error({ error: error.message });
    }
};

const getAllCountries = async(name) => {
    const allCountriesApi = await getCountriesApi()
    const allCountriesDB = await getCountriesDB()
    const allCountries = allCountriesDB.concat(allCountriesApi)
    let countryName;
    if (name) {
        countryName = allCountries.filter((c) => c.nombre.toLowerCase().includes(name.toLowerCase()));
        if (countryName.length) return countryName;
        throw new Error("No se encontro ningun país con ese nombre");
    }
    return allCountries
};

const getCountryById = async(id) => {
    const all = await getAllCountries();
    const byId = await all.filter((e) => e.id === id);
    if (byId.length) {
        return byId;
    } else {
        throw new Error(`País no encontrado, id:${id} incorrecto`);
    }
};

module.exports = {
    getAllCountries,
    getCountryById
}