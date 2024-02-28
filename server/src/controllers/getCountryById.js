const { Activity, Country } = require("../db");

const getCountryById = async (req, res) => {
  const { cca3 } = req.params;
  try {
    const country = await Country.findOne({
      where: { cca3 },
    });
    const countryActivity = await country.getActivities();
    console.log(country);
    if (country && countryActivity) {
      let detailArray = [];
      detailArray.push(country);
      detailArray.push(countryActivity);

      res.status(200).json(detailArray);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCountryById;
