var verifyFBWebhook = (requestObject) => {
    // this will validate on the following :
    // The request is of GET type
    // The request has query-parameters name hub.mode, hub.challenge, hub.verify_token
    // hub.challenge is mandatory
    if (requestObject.method.toLowerCase() === 'get') {
        if (Object.keys(requestObject.query).length > 0) {
            if (requestObject.query.hasOwnProperty('hub.challenge')) {
                console.log(`recieved hub.challenge as ${requestObject.query['hub.challenge']}`);
                return {challenge: requestObject.query['hub.challenge']}
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
    verifyFBWebhook
}
