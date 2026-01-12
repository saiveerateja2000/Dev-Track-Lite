const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: String,
  title: String,
  status: { type: String, enum: ['Todo', 'In Progress', 'Done'], default: 'Todo' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);
