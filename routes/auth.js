const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const users = [];

// Registration Page
router.get('/register', (req, res) => {
  res.render('register', { error: null });
});

// Handle User Registration
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exists
  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.render('register', { error: 'User already exists' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    users.push({ username, password: hashedPassword }); // Store user
    res.redirect('/auth/login'); // Redirect to login page
  } catch (err) {
    res.render('register', { error: 'Error creating user' });
  }
});

module.exports = router;
