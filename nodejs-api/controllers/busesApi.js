const BusesApiConsumerService = require('../services/busesApiConsumer');

module.exports = {
    getApiVersion(req, res){
        // Get sptrans api base url
        baseURL = BusesApiConsumerService.defaults.baseURL;
        
        // Get the api version from the url string
        urlArray = baseURL.split('/');
        apiVersion = urlArray[urlArray.length - 1];

        res.json({
            "sptransVersion": apiVersion
        });
    }
}