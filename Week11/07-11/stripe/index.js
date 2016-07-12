var express = require('express');

// Initialize stripe with the secret key for the test environment
var stripe = require('stripe')('sk_test_4lW0MsOh4LUCBeDYgOs8k32F');
var bodyParser = require('body-parser');
var app = express();

// serve up the index.html file in this same directory
app.use(express.static('./'));
app.use(bodyParser.urlencoded({ extended: false }));

// Create handler for the charge, which expects
// a posted message body containing the amount to
// be charged and the stripe token representing a
// credit card
app.post('/charge', function(request, response) {
  var amount = request.body.amount;
  var token = request.body.token;

  // make the charge using the credit card associated
  // with token
  stripe.charges.create({
    amount: amount,
    currency: 'usd',
    source: token
  }, function(err, charge) {
    if (err) {
      response.json({
        status: 'fail',
        error: err.message
      });
      return;
    }
    response.json({ status: 'ok', charge: charge });
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
