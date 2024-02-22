const { Activity } = require("../db");

const getAllActivities = async() => {
    const allActivitiesDB = await Activity.findAll();
    return allActivitiesDB
}


const postActivities = async(req, res) => {
    const { id, nombre, dificultad, duracion, temporada } = req.body;
    const nuevaActividad = await Activity.create({
        id: id,
        nombre: nombre,
        dificultad: dificultad,
        duracion: duracion,
        temporada: temporada
    });
    return nuevaActividad;
};

module.exports = {
    getAllActivities,
    postActivities
}