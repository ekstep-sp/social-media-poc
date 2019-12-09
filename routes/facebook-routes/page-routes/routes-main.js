const router = require('express').Router();

const appDetails = {
    appName: 'social-media-usage',
    appID: '554877028637015',
    userToken: 'EAAH4qGAvmVcBADZCt2BOMjRR6OZBVO8mXgoi3rJ5253lffoZAaEab9HJvCDLHCyvg8lopOuiKVQt2CQNaj1ZB4aTR8HdkrD70MQtkTdsEYHMjpwBIZB8XzagSreUJAXYW2SrSZCbRCOeOSlh83ITglWPbdQhD0ymdxb2PLyOTQMAZDZD',
    appToken: '554877028637015|JD6fnGr9fiLO3Qc9Ed8KXwO81-w'
}




router.get('/health', (req,res) => {
    console.log('\nfb-callback/health hit\n');
    res.status(200).send({health: 'ok'});
});

router.all('/page-event', (req, res, next) => {
    console.log(`\nfb-callback/page-event hit --> ${req.method}\n`);
    console.log('recieved data is ', req.body);
    res.status(200).send({status: 'ok', message: 'webhook recieved properly'});
    next();
});

module.exports = router;