var express = require('express')
var app = express()
var routes = require('./routes');//Incude Routes Folder

app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000))
//app.use(express.static(__dirname + '/public'))

app.locals.pagetitle = "Awesome Website 22 ";

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*', function(req, res){
	res.send('Bad Route');
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
