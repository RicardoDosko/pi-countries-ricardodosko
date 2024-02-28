const { Activity } = require("../db");

const getAct = async (req, res) => {
  try {
    const { activity } = req.params;
    const act = await Activity.findOne({ where: { name: activity } });

    if (act) {
      const countryAct = await act.getCountries();
      console.log(countryAct);
      res.status(200).json(countryAct);
    } else {
      res.status(400).send("Actividad no encontrada");
    }
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};

module.exports = getAct;
