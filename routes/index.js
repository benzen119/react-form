const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create user Schema & model
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: [true, 'First name field is required'],
    index: true
  },
  last_name: {
    type: String,
    required: [true, 'Last name field is required'],
    index: true
  }
});

const User = mongoose.model('user', UserSchema);

router.post('/adduser', (req, res, next) => {
  console.log(req.body);
  User.create(req.body).then((user) => {
    res.send(user);
  }).catch(next);
});

module.exports = router;