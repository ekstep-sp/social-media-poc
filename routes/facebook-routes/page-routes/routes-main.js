const router = require('express').Router();
const {verifyFBWebhook} = require('./../../utilities/FBRoutes-utility');

const appDetails = {
    appName: process.env.FACEBOOK_APP_NAME,
    appID: process.env.FACEBOOK_APP_ID,
    userToken: process.env.FACEBOOK_USER_TOKEN,
    appToken: process.env.FACEBOOK_APP_TOKEN,
    appSecret: process.env.FACEBOOK_APP_SECRET
}




router.get('/health', (req,res) => {
    console.log('\nfb-callback/health hit\n');
    res.status(200).send({health: 'ok'});
});

router.all('/page-event', (req, res, next) => {
    console.log(`\nfb-callback/page-event hit --> ${req.method}\n`);
    if (req.method.toLocaleLowerCase() === 'get') {
        const verified = verifyFBWebhook(req);
        if (verified) {
            // send back the challenge value to set it up
            res.status(200).send(verified.challenge);
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