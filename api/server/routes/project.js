const projectController = require('../controllers').projects;

var express = require('express');
var api = express.Router();

// Listing the projects
api.get('/project/list', projectController.list);
api.get('/project/list-tasks', projectController.list_tasks);
api.get('/project/update/:projectId', projectController.retrieve);

// Create a new project
api.post('/project/insert', projectController.create);

// Delete a project with id
api.delete('/project/delete/:projectId', projectController.destroy);

module.exports = api;