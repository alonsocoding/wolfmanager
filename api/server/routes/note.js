const noteController = require('../controllers').notes;

var express = require('express');
var api = express.Router();

// Listing the files
api.get('/note/list', noteController.list);
api.get('/note/update/:noteId', noteController.retrieve);

// Create a new note
api.post('/note/insert', noteController.create);

// Delete a note with id
api.delete('/note/delete/:noteId', noteController.destroy);

// Delete every note
api.delete('/note/delete-all', noteController.destroyAll);


module.exports = api;