const express = require('express');

const router = express.Router();

const { User } = require('../db/models/User');

router.get('/user/:username', async (req, res) => {
  const result = await User.findOne({ username: req.params.username })
    .catch((err) => console.log(err));

  res.send(result);
});

router.post('/user/:username', (req, res) => {
  // create a new user
});

router.put('/user/:username/gratitudes', (req, res) => {
  // update user messages w/ new message
});

router.put('/user/:username/affirmation', (req, res) => {
  // update user affirmation
});

module.exports = router;
