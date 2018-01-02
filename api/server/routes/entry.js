const entryController = require('../controllers').entries;

var express = require('express');
var api = express.Router();

// Listing the entry
api.get('/entry/list', entryController.list);
api.get('/entry/update/:entryId', entryController.retrieve);

// Update the entry
api.put('/entry/update/:entryId', entryController.update);

// Create a new entry
api.post('/entry/insert', entryController.create);

// Count all entry
api.get('/entry/count', entryController.countAll);

// Delete a entry with id
api.delete('/entry/delete/:entryId', entryController.destroy);

module.exports = api;