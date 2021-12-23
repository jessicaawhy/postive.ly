const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  affirmation: {
    type: String,
    default: 'Repeating positive affirmations will give power to the phrase, since hearing something often makes it more likely you\'ll believe it. Alter your subconcious thoughts and add an affirmation!',
  },
  gratitudes: [String],
});

const User = mongoose.model('User', UserSchema);

module.exports = {
  User,
};
