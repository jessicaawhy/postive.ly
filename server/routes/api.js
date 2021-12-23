const express = require('express');
const { User } = require('../db/models/User');

const router = express.Router();

router.get('/user/:username', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      throw new Error('No such user');
    }

    res.send(user);
  } catch (err) {
    console.log('Error: ', err);
    res.sendStatus(404);
  }
});

router.post('/user', async (req, res) => {
  try {
    const { username } = req.body;
    const result = await User.find({ username });

    if (result.length > 0) {
      throw new Error('User already exists!');
    }

    const user = new User({ username });

    user.affirmation = 'Repeating positive affirmations will give power to the phrase, since hearing something often makes it more likely you\'ll believe it. Alter your subconcious thoughts and add an affirmation!';

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

router.post('/user/:username/gratitudes', async (req, res) => {
  try {
    const { username } = req.params;
    const { gratitude } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error('No such user');
    }

    user.gratitudes.push(gratitude);

    await user.save();
    res.send(201);
  } catch (err) {
    console.log('Error: ', err);
    res.sendStatus(404);
  }
});

router.delete('/user/:username/gratitudes/:id', async (req, res) => {
  try {
    const { username, id } = req.params;
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error('No such user');
    }

    user.gratitudes.splice(id, 1);

    await user.save();
    res.send(200);
  } catch (err) {
    console.log('Error: ', err);
    res.sendStatus(404);
  }
});

router.put('/user/:username/affirmation', async (req, res) => {
  try {
    const { username } = req.params;
    const { affirmation } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error('No such user');
    }

    user.affirmation = affirmation || 'Repeating positive affirmations will give power to the phrase, since hearing something often makes it more likely you\'ll believe it. Alter your subconcious thoughts and add an affirmation!';

    await user.save();
    res.send(204);
  } catch (err) {
    console.log('Error: ', err);
    res.sendStatus(404);
  }
});

module.exports = router;
