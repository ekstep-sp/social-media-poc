const router = require('express').Router();
const path = require('path');
console.log('fetching twilio client');

const accountSid = 'AC2dc051e81b708fa2e98a76bd1bfcb6e6'
const authToken = '5242098a97503afe35c3e2faa04f2e68'
const twilio = require('twilio')(accountSid, authToken);

const MessagingResponse = require('twilio').twiml.MessagingResponse;
const response = new MessagingResponse();

//const twilioClient = require(path.join(__dirname, './../../lib/twilio/twilio')).getClient();

router.get('/status', (req,res) => {
    res.status(200).send('twilio apis for whatsapp are reachable');
})

// post api t
router.post('/event-webhook', (req,res) => {
    console.log('recieved post request for event-webhook');
    console.log('body ', req.body);
    twilio.messages.create({
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+919971696729',
        body: 'This is automated text'
    }).then(messageRes => {
        console.log('message sent with id ', messageRes.sid);
        res.send('OK');
    });
    /* const completeData = {
        body: req.body,
        params: req.params,
        headers: req.headers
    }
    console.log('complete req is ', completeData);
    res.status(200).send({completeData}); */
});

module.exports = router;