const { Router } = require('express');
const { getCountries, getById } = require("../handlers/countryHandlers.js");
const router = Router();


router.get ("/", getCountries);

router.get ("/:id", getById);



module.exports = router;