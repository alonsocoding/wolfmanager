const fileController = require('../controllers').files;

var express = require('express');
var api = express.Router();

// Listing the files
api.get('/file/list', fileController.list);
api.get('/file/update/:fileId', fileController.retrieve);

// Create a new file
api.post('/file/insert', fileController.create);

// Delete a file with id
api.delete('/file/delete/:fileId', fileController.destroy);

module.exports = api;