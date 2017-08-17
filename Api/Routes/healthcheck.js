// Import controllers
const Controllers = require('../Controllers/index.js');

module.exports = (api) => {
    api.get('/healthcheck/', Controllers.HealthcheckController.get);
};
