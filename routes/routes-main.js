// to import all the routes here and export it for usage
const twilioWhatsappRoutes = require('./twilio-whatsapp-routes/routes-main');
const facebookRoutes = require('./facebook-routes/page-routes/routes-main');
const twitterRoutes = require('./twitter-routes/routes-main');


module.exports = {
    twRouter: twilioWhatsappRoutes,
    fbRouter: facebookRoutes,
    twtRouter: twitterRoutes,
}