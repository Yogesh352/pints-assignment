const express = require("express");
const app = express();
const apiCall = require("./request");
var cors = require("cors");
app.use(cors());

const URL =
  "https://cloud.iexapis.com/v1/stock/market/previous?token=pk_48ab821ce19f4bb79eebdb8e0683fa3c";

app
  .get("/stock", cors(), (req, res) => {
    apiCall.callApi(function (response) {
      res.setHeader("Content-Type", "application/json");

      res.write(JSON.stringify(response));
      res.end();
    });
  })
  .listen(3000);
