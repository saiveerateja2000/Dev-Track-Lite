const express = require('express');
const router = express.Router();

// Routes will be implemented by student
// POST /api/auth/signup
// POST /api/auth/login

router.get('/', (req, res) => {
  res.json({ message: 'Auth routes placeholder' });
});

module.exports = router;
