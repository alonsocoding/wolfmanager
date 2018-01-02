const taskController = require('../controllers').tasks;

var express = require('express');
var api = express.Router();

// Listing the tasks
api.get('/task/list', taskController.list);

// Create a new task
api.post('/task/insert', taskController.create);

// Count all task
api.get('/task/count', taskController.countAll);

// Update the task
api.put('/task/update/:taskId', taskController.update);

// Delete a task with id
api.delete('/task/delete/:taskId', taskController.destroy);

// Delete every task
api.delete('/task/delete/task-all', taskController.destroyAll);

module.exports = api;