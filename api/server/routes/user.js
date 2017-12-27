const userController = require('../controllers').users;

var express = require('express');
var api = express.Router();

// Listing the user
api.get('/user/list', userController.list);

// Create a new user
api.post('/user/insert', userController.create);

module.exports = api;