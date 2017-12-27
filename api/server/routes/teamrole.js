const teamController = require('../controllers').teamroles;

var express = require('express');
var api = express.Router();

// Listing the team role
api.get('/teamrole/list', teamController.list);

// Create a new team role
api.post('/teamrole/insert', teamController.create);

module.exports = api;