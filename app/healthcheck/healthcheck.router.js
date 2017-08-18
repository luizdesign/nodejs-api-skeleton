const { Router } = require('express');
const healthcheck = require('./healthcheck.controller.js');

const router = Router();

router
    .route('/healthcheck')
    .get(healthcheck.get);

module.exports = router;
