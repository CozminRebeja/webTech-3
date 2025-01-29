const { usersData } = require('../models/userModel');

const userController = {
  // Display a user's profile
  viewProfile: (req, res) => {
    const userId = parseInt(req.params.id);
    const user = usersData.users.find((user) => user.id === userId);

    if (!user) {
      res.status(404).send('User not found');
      return;
    }

    res.render('userProfile', { user });
  },

  // Display the user edit form
  editForm: (req, res) => {
    const userId = parseInt(req.params.id);
    const user = usersData.users.find((user) => user.id === userId);

    if (!user) {
      res.status(404).send('User not found');
      return;
    }

    res.render('editUser', { user });
  },

  // Handle user edit form submission
  editUser: (req, res) => {
    const userId = parseInt(req.params.id);
    const user = usersData.users.find((user) => user.id === userId);

    if (!user) {
      res.status(404).send('User not found');
      return;
    }

    user.name = req.body.name;
    user.surname = req.body.surname;
    user.age = parseInt(req.body.age);

    res.redirect(`/user/${userId}/view`);
  },

  // Delete a user
  deleteUser: (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = usersData.users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      res.status(404).send('User not found');
      return;
    }

    usersData.users.splice(userIndex, 1);
    res.redirect('/');
  },
};

module.exports = userController;
