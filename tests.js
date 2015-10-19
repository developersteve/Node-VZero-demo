var supertest = require('supertest');
var app = require('./../app.js');

var payment = {
    amount: '10.00',
    creditCard: {
        number: '5105105105105100',
        expirationDate: '05/2014',
        cvv: '123'
    }
};

supertest(app)
    .post('/process')
    .send(payment)
    // .expect('Content-Type', /html/)
    .expect(200)
    // .expect(isValidCVV)
    .end(function(err, res){
        if (err) throw err;
        console.log(res.body);
    });

function isValidCVV (res) {
    // if (!('M' in res.body)) throw new Error("missing prev key");
}
