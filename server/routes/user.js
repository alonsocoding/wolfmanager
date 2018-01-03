const userController = require('../controllers').users;

var express = require('express');
var api = express.Router();

// Listing the user
api.get('/user/list', userController.list);

// Create a new user
api.post('/user/insert', userController.create);

// Login
api.post('/user/login', userController.login);

// Update the user
api.put('/user/update/:userId', userController.update);

// Count all task
api.get('/user/count', userController.countAll);

// Delete a user with id
api.delete('/user/delete/:userId', userController.destroy);


module.exports = api;