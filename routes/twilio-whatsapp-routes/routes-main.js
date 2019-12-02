const router = require('express').Router();

router.get('/status', (req,res) => {
    res.status(200).send('twilio apis for whatsapp are reachable');
})

// post api t
router.post('/event-webhook', (req,res) => {
    console.log('recieved post request for event-webhook');
    console.log(req);
    res.status(200).send({response: 'ok'});
});

module.exports = router;