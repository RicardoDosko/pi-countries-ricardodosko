const { Country } = require("../db");

const getCountryByName = async (req, res) => {
  const { nameCommon } = req.query;
  try {
    const countries = await Country.findAll();

    const filteredCountries = countries.filter((country) =>
      country.nameCommon.toLowerCase().startsWith(nameCommon.toLowerCase())
    );

    const idWActivity = await Promise.all(
      filteredCountries.map(async (country) => {
        const activities = await country.getActivities();
        return [country, activities];
      })
    );
    if (idWActivity.length > 0) {
      res.status(200).json(idWActivity);
    } else {
      res
        .status(404)
        .json({ message: "No countries found with the specified name." });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCountryByName;
