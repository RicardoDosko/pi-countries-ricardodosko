const { Country } = require("../db");

const getCount = async (req, res) => {
  try {
    const { country } = req.params;
    const count = await Country.findOne({
      where: { nameCommon: country },
    });

    if (count) {
      const countAct = await count.getActivities();
      console.log(countAct);
      res.status(200).json(countAct);
    } else {
      res.status(400).send("Pais no encontrado");
    }
  } catch (err) {
    res.status(500).json({ Error: err.message });
  }
};

module.exports = getCount;
