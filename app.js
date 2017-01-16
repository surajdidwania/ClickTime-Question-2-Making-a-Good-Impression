/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var app = express();
var Controller = require('./controller/control.js');
//var favicon = require('serve-favicon');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(favicon());
app.use(morgan('dev'));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
Controller(app);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
