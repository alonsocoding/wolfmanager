const financeCategoryController = require('../controllers').financecategories;

var express = require('express');
var api = express.Router();

// Listing the finance categories
api.get('/financecategory/list', financeCategoryController.list);
api.get('/financecategory/update/:financecategoryId', financeCategoryController.retrieve);

// Create a new finance category
api.post('/financecategory/insert', financeCategoryController.create);

// Delete a finance with id
api.delete('/financecategory/delete/:financecategoryId', financeCategoryController.destroy);

module.exports = api;