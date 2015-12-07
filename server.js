var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var peopleRoute = require('./src/main/route/people.js');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8090;

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
  res.json({"test":"dsds"});
});

peopleRoute(router);

app.use('/api/v1', router);

// app.use('/todos/:id', function(req, res, next) {
//   console.log('Request Type:', req.method);
//   next();
// });
//
// app.get('/todos/:id', function(req, res, next) {
//   res.json({
//     'test': 'test'
//   })
// });


//mongoose.connect('mongodb://localhost/myapp');


app.listen(port);
