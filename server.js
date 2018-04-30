// require all dependencies
var express = require('express');
var app = express();
 
// set up the template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('views'));
// GET response for '/'
app.get('/', function (req, res) {
 
    // render the 'index' template, and pass in a few variables
    res.render('index', { title: 'Bela Vista', message: 'Hello there!' });
 
});
 
// start up the server
app.listen(3000, function () {
    console.log('Listening on http://localhost:3000');
});