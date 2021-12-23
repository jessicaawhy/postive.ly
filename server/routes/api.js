const express = require('express');
const { User } = require('../db/models/User');

const router = express.Router();

router.get('/user/:username', async (req, res) => {
  try {
    const result = await User.find({ username: req.params.username });

    if (!result.length) {
      throw new Error('No such user');
    }

    res.send(result);
  } catch (err) {
    console.log('Error: ', err);
    res.sendStatus(404);
  }
});

router.post('/user', async (req, res) => {
  const { username } = req.body;
  try {
    const result = await User.find({ username });

    if (result.length > 0) {
      throw new Error('User already exists!');
    }

    const user = new User({ username });

    user.gratitudes.push('postive.ly - Your new happy appy.');
    user.gratitudes.push('grat·​i·​tude: A feeling of appreciation or thanks');
    user.gratitudes.push('This is where you can keep track of things that you are grateful for each day.');
    user.gratitudes.push('Learn positive self talk and celebrate your achievements!');
    user.gratitudes.push('Connect to something larger than yourself - whether to other people, nature, etc.');
    user.gratitudes.push('Rewire your mind - think positive.ly');

    await user.save();
    res.send(201);
  } catch (err) {
    console.log('Error: ', err);
    res.sendStatus(422);
  }
});

router.put('/user/:username/gratitudes', (req, res) => {
  // update user messages w/ new message
});

router.put('/user/:username/affirmation', (req, res) => {
  // update user affirmation
});

module.exports = router;
