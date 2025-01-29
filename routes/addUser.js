const express = require('express');
const router = express.Router();
const upload = require('../controllers/multerConfig');
const { usersData } = require('../models/userModel');

// Route to display the form for adding a new user
router.get('/', (req, res) => {
  res.render('addUser');
});

// Route to handle form submission for adding a new user
router.post(
  '/',
  (req, res, next) => {
    // Generate a unique ID for the new user
    const lastElement =
      usersData.users.length > 0
        ? usersData.users[usersData.users.length - 1]
        : null;
    const newUserId = lastElement ? parseInt(lastElement['id']) + 1 : 1; // Start with ID 1 if no users exist

    // Set userId as a custom header before uploading files
    req.headers['userid'] = newUserId.toString();
    next();
  },
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'cover', maxCount: 1 },
  ]),
  (req, res) => {
    const { name, surname, age } = req.body;
    const newUserId = req.headers['userid']; // Retrieve user ID from headers

    // Create a new user object with correct filenames
    const newUser = {
      id: parseInt(newUserId),
      name: name,
      surname: surname,
      age: parseInt(age),
      photo: req.files['photo'] ? req.files['photo'][0].filename : undefined,
      cover: req.files['cover'] ? req.files['cover'][0].filename : undefined,
    };

    usersData.users.push(newUser);
    console.log('Updated Users List:', usersData.users);

    res.redirect('/all');
  }
);

module.exports = router;
