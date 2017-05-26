// Module dependencies.
var express = require('express'),
    cons = require('consolidate');

var app = express();

// assign the dust engine to .dust files
app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/../../views');

function renderPage (req, res) {
  let shopping = req.query.name,
      dir = 'shopping/';
  res.render(dir+shopping+'/page', {
    shopping: shopping
  });
}

app.get('/shopping/:name?', renderPage);

appServer = app.listen(process.env.PORT || 3000);
console.log("Express server started");
