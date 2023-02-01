const request = require("request");

//request call to call the URL and get the data
URL =
  "https://cloud.iexapis.com/v1/stock/market/list/mostactive?token=pk_48ab821ce19f4bb79eebdb8e0683fa3c&filter=symbol,companyName,latestPrice,previousClose";
const requestCall = (callback) => {
  request(URL, { json: true }, (err, res, body) => {
    if (err) {
      return callback(err);
    }
    return callback(body);
  });
};

module.exports.callApi = requestCall;
