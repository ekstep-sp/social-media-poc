const security = require('./../../helpers/security/security');

var verifyTwitterWebhook = (requestObject) => {
    // this will validate on the following :
    // The request is of GET type
    // The request has query-parameter named crc_token which is mandatory
    if (requestObject.method.toLowerCase() === 'get') {
        if (Object.keys(requestObject.query).length > 0) {
            if (requestObject.query.hasOwnProperty('crc_token')) {
                console.log(`recieved crc_token as ${requestObject.query['crc_token']}`);
                // get the respective sha key and send it back
                return {sha: `sha256=${security.get_challenge_response(requestObject.query['crc_token'], 'CpL7ueEaqGmaBXWmGgkNp96cDzzAMWJ5mcsvv1oKANJWaEtpuv')}`}
            }
            else {
                console.log('validation failed as hub.challenge is not present in params');
            }
        }
        else {
            console.log('validation failed as no params present');
        }
    }
    else {
        console.log('validation failed as request is not GET');
    }
    return null;
}


module.exports = {
    verifyTwitterWebhook
}
