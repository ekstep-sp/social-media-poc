const process = require('process');
const express = require('express');
const app = express();
// import project variables
require('dotenv').config();

const mainPort = process.env.PORT || 3200;

// importing routes from different routers
const {twRouter, fbRouter, twtRouter} = require('./routes/routes-main');
// use urlencoded format
app.use(express.urlencoded({extended: true}))
// use json formats
app.use(express.json());

app.get('/status', (req,res) => {
    res.status(200).send('I am alive');
})

app.use('/tw-whatsapp', twRouter);
app.use('/fb-callback', fbRouter);
app.use('/twt-callback', twtRouter);

app.listen(mainPort, () => {
    console.log('main server is burning hot at ', mainPort);
});