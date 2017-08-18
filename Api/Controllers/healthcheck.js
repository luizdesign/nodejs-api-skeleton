module.exports = {
    get: (req, res) => {
        res.json({
            status: true,
            message: 'API ok!'
        });
    }
};
