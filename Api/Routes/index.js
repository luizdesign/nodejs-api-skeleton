// Import healthcheck routes
const HealthcheckRoutes = require('./healthcheck.js');

module.exports = (api) => {
    //Register healthcheck routes
    HealthcheckRoutes(api);
}
