const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Y'all Mongoose connected to: ${db.host}:${db.port}`);
});

module.exports = mongoose;
