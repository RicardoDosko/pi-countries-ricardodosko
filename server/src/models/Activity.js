const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      },
      duration: {
        type: DataTypes.STRING,
      },
      season: {
        type: DataTypes.ENUM("Summer", "Fall", "Winter", "Spring"),
      },
    },
    {
      timestamps: false,
    }
  );
};
