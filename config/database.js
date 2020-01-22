const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', () => {
  console.log(`Y'all Mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;
