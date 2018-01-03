const teamController = require('../controllers').teamroles;

var express = require('express');
var api = express.Router();

// Listing the team role
api.get('/teamrole/list', teamController.list);

// Create a new team role
api.post('/teamrole/insert', teamController.create);

// Update the team role
api.put('/teamrole/update/:teamroleId', teamController.update);

// Delete a teamrole with id
api.delete('/teamrole/delete/:teamroleId', teamController.destroy);


module.exports = api;