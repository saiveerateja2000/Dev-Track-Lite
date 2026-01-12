const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Routes will be implemented by student
// GET /api/tasks (get user tasks)
// POST /api/tasks (create task)
// PUT /api/tasks/:id (update task)
// DELETE /api/tasks/:id (delete task)

router.get('/', authMiddleware, (req, res) => {
  res.json({ message: 'Tasks routes placeholder' });
});

module.exports = router;
