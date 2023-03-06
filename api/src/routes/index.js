const { Router } = require('express');

const routerCountry = require ('../routes/countries.js');
const routerActivity = require ('../routes/activities.js')

const router = Router();

// Configurar los routers

router.use('/countries', routerCountry);
router.use('/activities', routerActivity);


module.exports = router;
