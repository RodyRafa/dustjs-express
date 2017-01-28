// Module dependencies.
var express = require('express')
  , cons = require('consolidate');

var app = express();

// assign the dust engine to .dust files
app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/../views');

app.get('/*/', function(req, res){
	console.log(req.url);
  res.render('index', {
    title: 'DustJS Example',
    username: 'RodyRafa'
  });
});

appServer = app.listen(process.env.PORT || 3000);
console.log("Express server started");
