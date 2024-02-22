const { Router } = require("express");
//importo los routers 
const routerCountry = require('./routerCountry')
const routerActivity = require('./routerActivity')

const router = Router();

//Configuro los routers
router.use('/countries', routerCountry)
router.use('/activities', routerActivity)

module.exports = router;