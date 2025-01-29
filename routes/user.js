const express = require('express');
const router = express.Router();
const upload = require('../controllers/multerConfig');
const { usersData, getUser } = require('../models/userModel');

// Route to display a user profile
router.get('/:id/view', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = getUser(userId);

  if (!user) {
    res.status(404).send('User not found');
    return;
  }

  res.render('userProfile', { user });
});

// Route to display the user edit form
router.get('/:id/edit', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = getUser(userId);

  if (!user) {
    res.status(404).send('User not found');
    return;
  }

  res.render('editUser', { user });
});

// Route to handle user edit form submission
router.post(
  '/:id/edit',
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'cover', maxCount: 1 },
  ]),
  (req, res) => {
    const userId = parseInt(req.params.id);
    const user = getUser(userId);

    if (!user) {
      res.status(404).send('User not found');
      return;
    }

    // Update user details
    user.name = req.body.name || user.name;
    user.surname = req.body.surname || user.surname;
    user.age = req.body.age ? parseInt(req.body.age) : user.age;

    // Correct file handling

    if (req.files['photo']) {
      user.photo = req.files['photo'][0].filename;
    }

    if (req.files['cover']) {
      user.cover = req.files['cover'][0].filename;
    }

    res.redirect(`/user/${userId}/view`);
  }
);

// Route to delete a user
router.get('/:id/delete', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = usersData.users.findIndex((user) => user.id === userId);

  if (userIndex === -1) {
    res.status(404).send('User not found');
    return;
  }

  // Remove user from array
  usersData.users.splice(userIndex, 1);
  res.redirect('/all');
});

module.exports = router;
