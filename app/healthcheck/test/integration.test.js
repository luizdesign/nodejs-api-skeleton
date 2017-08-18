const request = require('supertest')('http://localhost:3000');

describe ('Testing healthcheck', () => {
    describe ('GET', () => {
        it ('I expect that responds with a json', (done) => {
            request.get('/healthcheck')
                .expect('Content-Type', 'application/json; charset=utf-8')
                .expect(200)
                .end((err, res) => {
                    if (err) {
                        return done(err);
                    }
                    done();
                });
        });
    });
});
