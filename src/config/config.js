var mongoose   = require('mongoose');
var mongodb_config={
  host:'localhost'
}


mongoose.connect('mongodb://localhost/myapp');
