const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, // Marcamos 'id' como la clave primaria
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultad: {
            type: DataTypes.ENUM("1", "2", "3", "4", "5"),
            allowNull: false,
        },
        duracion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        temporada: {
            type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
            allowNull: false,
        },
    }, { timestamps: false }); //Cuando timestamps se establece en false, Sequelize no añadirá automáticamente los campos createdAt y updatedAt al modelo country
};