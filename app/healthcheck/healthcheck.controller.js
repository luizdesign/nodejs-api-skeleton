module.exports = {
    get
};

function get(req, res) {
    res.json({
        status: true,
        message: 'API ok!'
    });
}
