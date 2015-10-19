'use strict';

var express = require('express');
var router = express.Router();

var braintree = require('braintree');

var gateway = braintree.connect({
    environment: braintree.Environment.Sandbox,
    merchantId: 'ffdqc9fyffn7yn2j',
    publicKey: 'qj65nndbnn6qyjkp',
    privateKey: 'a3de3bb7dddf68ed3c33f4eb6d9579ca'
});

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Braintree Payment'
    });
});

router.post('/process', function(req, res) {
    var params = {
        amount: req.param('amount'),
        creditCard: {
            number: req.param('number'),
            cvv: req.param('cvv'),
            expirationDate: req.param('expiration_date')
        }
    };

    gateway.transaction.sale(params, function (err, result) {
        if (err) {
            res.render('error', {
                title: 'Payment Error',
                error: JSON.stringify(err, null, 2)
            });
        } else {
            if(req.get('Content-Type') === 'application/json') {
                res.json(result);
            } else {
                res.render('output', {
                    title: 'Payment Success',
                    params: JSON.stringify(req.body, null, 2),
                    result: JSON.stringify(result, null, 2)
                });
            }
        }
    });
});

module.exports = router;
