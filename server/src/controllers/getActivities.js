const { Activity, Country } = require("../db");

const getActivities = async (req, res) => {
  try {
    const allAct = await Activity.findAll({ include: Country });
    res.status(200).json(allAct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getActivities;
