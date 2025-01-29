const express = require('express');
const router = express.Router();
const { getUsers } = require('../models/userModel');

// Route to display all users
router.get('/', (req, res) => {
  const searchQuery = req.query.search || '';
  const users = getUsers(searchQuery);

  // Render the 'listUsers.ejs' file
  res.render('../views/listUsers', { users });
});

module.exports = router;
