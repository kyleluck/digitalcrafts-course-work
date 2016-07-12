# Stripe Integration

This is a minimalistic example of using Stripe to make a charge
in a web-based Node.js application.

## Stripe Signup

You will need to sign up for a Stripe account. It is free.

After signing up and logging in, you will go to:

Your Business Name -> Account Settings

Then you will click on the "API Keys" tab. Note the "Test secret key" and the "Test Publishable Key", you will need them both for testing. If you are ready to go live and actually charging, switch them to the "Live secret key" and "Live publishable key" pair.

## How it works

This example requires the interaction between
Stripe's checkout.js - which needs to be executed in a web page - and the
Node.js backend. A bit of client-side JavaScript will start off checkout.js -
creating a form to prompt the user for a credit-card information. It will then
validate the credit card information by communicating with the Stripe server, which
will return a Stripe token in the event of success. That Stripe token will represent
a validated credit card, and can be used to create charges.

The next step is to make an Ajax request to the backend, passing in the Stripe token
as well as the dollar amount to be charged. The Node.js backend, using Express, will
make the charge using the Node.js stripe module's stripe.charges.create() method, passing
in the Stripe token and the dollar amount to be charged.

## Resources

* https://stripe.com/docs/api/node#create_charge
* https://stripe.com/docs/checkout#integration-custom
* https://stripe.com/docs/testing
