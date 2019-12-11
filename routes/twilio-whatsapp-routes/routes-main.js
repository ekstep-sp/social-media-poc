const router = require('express').Router();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilio = require('twilio')(accountSid, authToken);

router.get('/status', (req,res) => {
    res.status(200).send('twilio apis for whatsapp are reachable');
})

// post api t
router.post('/event-webhook', (req,res) => {
    console.log('recieved post request for event-webhook');
    console.log('body ', req.body);
    // fetch important data 
    const completeData = {
        data: req.body.Body,
        smsSID: req.body.SmsSid,
        status: req.body.SmsStatus,
        from: req.body.From,
        to: req.body.To,
        messageSID: req.body.MessageSid,
        accountSID: req.body.AccountSid,
        totalSegments: req.body.NumSegments,
    };
    console.log('complete data is ', completeData);
    twilio.messages.create({
        from: 'whatsapp:+14155238886',
        to: completeData.from,
        body: `Hie ${completeData.from}, we have successfully recieved your message : \n*${completeData.data}*. \nWe will get back to you.`,
    }).then(messageRes => {
        console.log('message sent with id ', messageRes.sid);
        res.send('OK');
    });
});

module.exports = router;