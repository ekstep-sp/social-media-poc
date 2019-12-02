const router = require('express').Router();

router.get('/status', (req,res) => {
    res.status(200).send('twilio apis for whatsapp are reachable');
})

module.exports = router;