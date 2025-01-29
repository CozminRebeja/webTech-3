const express = require('express');
const router = express.Router();

// route for the homepage
router.get('/', (req, res) => {
  res.render('../views/index');
});

module.exports = router;
