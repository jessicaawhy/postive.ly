const mongoose = require('mongoose');
const app = require('./app');

const uri = process.env.DB_URI;

mongoose.connect(uri, (error) => {
  console.log(error);
});

app.listen(3000, () => console.log('now listening on port 3000'));
