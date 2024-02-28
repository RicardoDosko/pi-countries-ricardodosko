const { Activity, Country } = require("../db");


const getAllActivities = async() => {
    const allActivitiesDB = await Activity.findAll();
    return allActivitiesDB
}


const postActivities = async(req, res) => {
    const { id, nombre, dificultad, duracion, temporada, countries } = req.body;
    const createActivity = await Activity.create({
        id: id,
        nombre: nombre,
        dificultad: dificultad,
        duracion: duracion,
        temporada: temporada,

    });
    let countryDB = await Country.findAll({
        where: { name: countries },
    });

    createActivity.addCountry(countryDB);
    return createActivity;
};

module.exports = {
    getAllActivities,
    postActivities
}