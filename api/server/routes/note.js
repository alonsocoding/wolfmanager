const noteController = require('../controllers').notes;

var express = require('express');
var api = express.Router();

// Listing the files
api.get('/note/list', noteController.list);
api.get('/note/update/:fileId', noteController.retrieve);

// Create a new note
api.post('/note/insert', noteController.create);

// Delete a note with id
api.delete('/note/delete/:fileId', noteController.destroy);

module.exports = api;