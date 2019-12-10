const router = require('express').Router();
const {verifyTwitterWebhook} = require('./../utilities/twitterRoutes-utility');

router.get('/health', (req,res) => {
    console.log('\ntwt-callback/health hit\n');
    res.status(200).send({health: 'ok'});
});

router.all('/webhook-event', (req, res, next) => {
    console.log(`\ntwt-callback/webhook-event hit --> ${req.method}\n`);
    if (req.method.toLocaleLowerCase() === 'get') {
        const verified = verifyTwitterWebhook(req);
        if (verified) {
            // send back the challenge value to set it up
            res.status(200).send({response_token: verified.sha});
        } else {
            console.log('could not verify the webhook, sending 403');
            res.status(403).send('unauthorized');
        }
    } else {
        // request is verified already, now this will have original data
        console.log('recieved data is ');
        console.log(JSON.stringify(req.body));
        res.status(200).send({status: 'ok', message: 'webhook recieved properly'});   
    }
    next();
});

module.exports = router;