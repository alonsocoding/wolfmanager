const projectCategoryController = require('../controllers').projectcategories;

var express = require('express');
var api = express.Router();

// Listing the project categories
api.get('/projectcategory/list', projectCategoryController.list);
api.get('/projectcategory/update/:projectcategoryId', projectCategoryController.retrieve);

// Create a new project category
api.post('/projectcategory/insert', projectCategoryController.create);

// Delete a project with id
api.delete('/projectcategory/delete/:projectcategoryId', projectCategoryController.destroy);

module.exports = api;