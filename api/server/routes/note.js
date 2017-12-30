const noteController = require('../controllers').notes;

var express = require('express');
var api = express.Router();

// Listing the notes
api.get('/note/list', noteController.list);

// Update the note
api.put('/note/update/:noteId', noteController.update);

// Create a new note
api.post('/note/insert', noteController.create);

// Delete a note with id
api.delete('/note/delete/:noteId', noteController.destroy);

// Delete every note
api.delete('/note/delete-all', noteController.destroyAll);


module.exports = api;