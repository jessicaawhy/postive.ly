const mongoose = require('mongoose');

const { Schema } = mongoose;

const childSchema = new Schema({ gratitude: 'string' });

const UserSchema = new Schema({
  username: String,
  affirmation: String,
  gratitudes: [String],
});

const User = mongoose.model('User', UserSchema);

module.exports = {
  User, childSchema,
};
