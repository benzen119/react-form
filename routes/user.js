const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const User = require('../models/user');

router.post('/adduser', (req, res, next) => {
  console.log(req.body);
  User.create(req.body).then((user) => {
    res.send('User saved successfully');
  }).catch(next);
});

module.exports = router;