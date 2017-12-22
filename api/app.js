const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

var project_routes = require('./server/routes/project');
var task_routes = require('./server/routes/task');
var projectcategory_routes = require('./server/routes/projectcategory');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Configurar las cabeceras http

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONES, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Carga de rutas  
app.use('/api', project_routes);
app.use('/api', task_routes);
app.use('/api', projectcategory_routes);

module.exports = app;
