const express = require('express');
const router = express.Router();

function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next(); // User is logged in
  }
  res.redirect('/auth/login'); // Redirect to login page if not authenticated
}

router.get('/', isAuthenticated, (req, res) => {
  res.render('allUsers', { users: [{ name: 'User1' }, { name: 'User2' }] });
});

module.exports = router;
