const BusesApiConsumerService = require('../services/busesApiConsumer');

module.exports = {
    getApiVersion(req, res){
        baseURL = BusesApiConsumerService.defaults.baseURL;
        
        urlArray = baseURL.split('/');
        apiVersion = urlArray[urlArray.length - 1];

        res.json({
            "sptransVersion": apiVersion
        });
    }
}