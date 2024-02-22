const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Country', {
        id: {
            type: DataTypes.STRING(3),
            primaryKey: true, // Marcamos 'id' como la clave primaria
            allowNull: false,
            validate: {
                len: [3]
            }
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img_band: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        continente: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capital: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subregion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        area: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        poblacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mapa: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { timestamps: false }); //Cuando timestamps se establece en false, Sequelize no añadirá automáticamente los campos createdAt y updatedAt al modelo country
};