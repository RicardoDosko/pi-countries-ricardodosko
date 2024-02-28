require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE } = process.env;

const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`;
// const URL =`postgres://postgres:admin@localhost/countries`

const sequelize = new Sequelize(URL, {
    logging: console.log("Connected"),
    native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Activity, Country } = sequelize.models;

// Aca vendrian las relaciones
Country.belongsToMany(Activity, {
    through: "country_activity",
    foreignKey: "countryId",
    timestamps: false,
});
Activity.belongsToMany(Country, {
    through: "country_activity",
    foreignKey: "activityId",
    timestamps: false,
});

// Product.hasMany(Reviews);

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};