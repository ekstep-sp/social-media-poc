const router = require('express').Router();

const twilioClient = require('./../../lib/twilio/twilio');

router.get('/status', (req,res) => {
    res.status(200).send('twilio apis for whatsapp are reachable');
})

// post api t
router.post('/event-webhook', (req,res) => {
    console.log('recieved post request for event-webhook');
    twilioClient.getClient.messages.create({
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