const teamMemberController = require('../controllers').teammembers;

var express = require('express');
var api = express.Router();

// Listing the team member
api.get('/teammember/list', teamMemberController.list);

// Create a new user
api.post('/teammember/insert', teamMemberController.create);

// Update the user
api.put('/teammember/update/:teammemberId', teamMemberController.update);


// Delete a teammember with id
api.delete('/teammember/delete/:teammemberId', teamMemberController.destroy);

module.exports = api;