const { Country } = require("../db");

const getTableCountries = async (req, res) => {
  try {
    const allCountries = await Country.findAll();

    const activityByCountry = await Promise.all(
      allCountries.map(async (country) => {
        const activities = await country.getActivities();
        return [country, activities];
      })
    );
    res.status(200).json(activityByCountry);
  } catch (error) {
    req.status(500);
  }
};

module.exports = getTableCountries;
