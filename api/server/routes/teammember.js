const teamMemberController = require('../controllers').teammembers;

var express = require('express');
var api = express.Router();

// Listing the team member
api.get('/teammember/list', teamMemberController.list);

// Create a new user
api.post('/teammember/insert', teamMemberController.create);

module.exports = api;