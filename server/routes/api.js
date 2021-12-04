const express = require('express');

const router = express.Router();

router.get('/user/:username', (req, res) => {
  // get data for a user
});

router.post('/user/:username', (req, res) => {
  // create a new user
});

router.put('/user/:username/messages', (req, res) => {
  // update user messages w/ new message
});

router.put('/user/:username/affirmation', (req, res) => {
  // update user affirmation
});

module.exports = router;
