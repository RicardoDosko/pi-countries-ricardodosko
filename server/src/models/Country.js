const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Country",
    {
      cca3: {
        type: DataTypes.STRING,
      },
      nameOfficial: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nameCommon: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flag: {
        type: DataTypes.STRING,
      },
      continent: {
        type: DataTypes.STRING,
      },
      capital: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      subregion: {
        type: DataTypes.STRING,
      },
      area: {
        type: DataTypes.INTEGER,
      },
      population: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};
