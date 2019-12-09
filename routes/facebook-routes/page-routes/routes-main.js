const router = require('express').Router();



router.get('/health', (req,res) => {
    console.log('\nfb-callback/health hit\n');
    res.status(200).send({health: 'ok'});
});

router.post('/page-event', (req, res) => {
    console.log('\nfb-callback/page-event hit\n');
    console.log('recieved data is ', req.body);
    res.status(200).send({status: 'ok', message: 'webhook recieved properly'});
});

module.exports = router;