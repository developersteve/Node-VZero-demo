'use strict';

var supertest = require('supertest');
var should = require('should');
var app = require('./../app.js');

describe('cvvPass', function () {
    it('should pass (provided CVV matches)', function (done) {
        supertest(app)
            .post('/process')
            .send({
                amount: '10.00',
                number: '5105105105105100',
                expiration_date: '05/2014',
                cvv: '123'
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res){
                should.not.exist(err);
                var transaction = res.body.transaction;
                transaction.cvvResponseCode.should.equal('M');
                transaction.processorResponseCode.should.be.within(1000, 1002);
                done();
            });
    });
});

describe('cvvFail', function () {
    it('should fail (wrong CVV)', function (done) {
        supertest(app)
            .post('/process')
            .send({
                amount: '10.00',
                number: '5105105105105100',
                expiration_date: '05/2014',
                cvv: '200'
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res){
                should.not.exist(err);
                var transaction = res.body.transaction;
                transaction.status.should.equal('gateway_rejected');
                done();
            });
    });
});
