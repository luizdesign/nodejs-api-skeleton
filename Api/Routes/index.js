module.exports = (api) => {
    api.get('/healthcheck/', (req, res) => {
        res.json({
            status: true,
            message: 'API ok!'
        });
    });
}
