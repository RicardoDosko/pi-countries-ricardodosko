const { Router } = require("express");
// const getCountries = require("../controllers/getCountries");
const getTableCountries = require("../controllers/getTableCountries");
const getCountryById = require("../controllers/getCountryById");
const getCountryByName = require("../controllers/getCountryByName");
const postActivities = require("../controllers/postActivities");
const getActivities = require("../controllers/getActivities");
const getAct = require("../controllers/getAct");
const getCount = require("../controllers/getCount");

const router = Router();

router.get("/countries", getTableCountries);
// router.get("/countries", getCountries);
router.get("/countries/id/:cca3", getCountryById);
router.get("/countries/name", getCountryByName);
router.post("/activities", postActivities);
router.get("/activities", getActivities);
router.get("/countriesActivities/:activity", getAct);
router.get("/activitiesCountry/:country", getCount);

module.exports = router;
