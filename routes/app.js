const router = require('express').Router();
let User = require('../models/User');

router.route('/register').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({ name, email, password });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email })
    .then(user => {
      if (user) {
        if (password === user.password) {
          res.json('Login successful!')
        } else {
          res.json('Incorrect password!')
        }
      } else {
        res.json('Email not found!')
      }
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;