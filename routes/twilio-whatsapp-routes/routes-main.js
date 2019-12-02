const router = require('express').Router();

router.get('/status', (req,res) => {
    res.status(200).send('twilio apis for whatsapp are reachable');
})

// post api t
router.post('/event-webhook', (req,res) => {
    console.log('recieved post request for event-webhook');
    const completeData = {
        body: req.body,
        params: req.params,
        headers: req.headers
    }
    console.log('complete req is ', completeData);
    res.status(200).send({completeData});
});

module.exports = router;