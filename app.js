const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
var path = require('path');

var project_routes = require('./routes/project');
var task_routes = require('./routes/task');
var projectcategory_routes = require('./routes/projectcategory');
var file_routes = require('./routes/file');
var teamrole_routes = require('./routes/teamrole');
var user_routes = require('./routes/user');
var teammember_routes = require('./routes/teammember');
var financecategory_routes = require('./routes/financecategory');
var entry_routes = require('./routes/entry');
var note_routes = require('./routes/note');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Heads http

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONES, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Routes  
app.use('/api', project_routes);
app.use('/api', task_routes);
app.use('/api', projectcategory_routes);
app.use('/api', file_routes);
app.use('/api', teamrole_routes);
app.use('/api', user_routes);
app.use('/api', teammember_routes);
app.use('/api', financecategory_routes);
app.use('/api', entry_routes);
app.use('/api', note_routes);

module.exports = app;
