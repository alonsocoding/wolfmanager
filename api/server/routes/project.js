const projectController = require('../controllers').projects;

var express = require('express');
var api = express.Router();

// Listing the projects
api.get('/project/list', projectController.list);
api.get('/project/list-tasks', projectController.list_tasks);
api.get('/project/retrieve/:projectId', projectController.retrieve);

// Count all projects
api.get('/project/count', projectController.countAll);

// Create a new project
api.post('/project/insert', projectController.create);

// Update the task
api.put('/project/update/:projectId', projectController.update);


// Delete a project with id
api.delete('/project/delete/:projectId', projectController.destroy);

module.exports = api;