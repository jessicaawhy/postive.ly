const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  affirmation: {
    type: String,
  },
  gratitudes: [String],
});

const User = mongoose.model('User', UserSchema);

module.exports = {
  User,
};
