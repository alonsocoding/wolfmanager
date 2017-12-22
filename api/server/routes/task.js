const taskController = require('../controllers').tasks;

var express = require('express');
var api = express.Router();

// Listing the tasks
api.get('/task/list', taskController.list);

// Create a new task
api.post('/task/insert', taskController.create);

module.exports = api;