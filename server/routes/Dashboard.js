const express = require('express');
const app = express();
const Dashboard = express.Router();

Dashboard.route('/getquote/').get(function (req, res) {
    res.json({
        message : "No data submitted.",
    });
}).post(function (req, res) {
  res.json(req.body);
})

Dashboard.route('/propertydetails/').get(function (req, res) {
    res.json({
        message : "No data submitted.",
    });
}).post(function (req, res) {
  res.json(req.body);
})

Dashboard.route('/coveragedetails/').get(function (req, res) {
    res.json({
        message : "No data submitted.",
    });
}).post(function (req, res) {
  res.json(req.body);
})

module.exports = Dashboard;
