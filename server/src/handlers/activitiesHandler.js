const { getAllActivities, postActivities } = require('../controllers/activitiesControllers')

const getAllActivitiesHandler = async(req, res) => {
    try {
        const response = await getAllActivities()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}
const postActivityHandler = async(req, res) => {
    try {
        const response = await postActivities(req);
        return res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

};

module.exports = {
    getAllActivitiesHandler,
    postActivityHandler
}