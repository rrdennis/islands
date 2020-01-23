const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/islands', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', () => {
  console.log(`Y'all Mongoose connected to: mongodb://localhost/islands`);
});

module.exports = mongoose;
// process.env.DATABASE_URL
