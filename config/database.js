const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(
  'mongodb://localhost/islands',
  {
    useNewUrlParser: true,  
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (!err) {
      let db = mongoose.connection;
      console.log(`Y'all connected to y'all MongoDB @ ${db.host}:${db.port}`)
    } else {
      console.log('Error in DB connection: ' + err)
    }
  }
);
