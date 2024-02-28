const { Country } = require("../db");
const { Activity } = require("../db");

const getCountries = async () => {
  try {
    const api = await fetch("http://localhost:5000/countries");
    const data = await api.json();
    const map = data.map((m) => ({
      cca3: m.cca3,
      nameCommon: m.name.common,
      nameOfficial: m.name.official,
      flag: m.flags.png,
      capital: m.capital,
      continent:
        Array.isArray(m.continents) && m.continents.length > 0
          ? m.continents[0]
          : "",
      subregion: m.subregion,
      area: m.area,
      population: m.population,
    }));
    await Country.bulkCreate(map);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = getCountries;
