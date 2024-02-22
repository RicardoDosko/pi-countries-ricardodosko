const { Router } = require('express')
const router = Router();

const { getAllActivitiesHandler, postActivityHandler } = require('../handlers/activitiesHandler')

router.get('', getAllActivitiesHandler)
router.post('', postActivityHandler)

module.exports = router;