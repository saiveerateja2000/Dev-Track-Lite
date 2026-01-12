import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import TaskCard from '../components/TaskCard';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user')) || {};

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
      return;
    }
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/tasks');
      setTasks(response.data.tasks);
    } catch (err) {
      setError('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    try {
      await api.post('/tasks', { title: newTaskTitle });
      setNewTaskTitle('');
      fetchTasks();
    } catch (err) {
      setError('Failed to create task');
    }
  };

  const handleUpdateStatus = async (taskId, newStatus) => {
    try {
      await api.put(`/tasks/${taskId}`, { status: newStatus });
      fetchTasks();
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await api.delete(`/tasks/${taskId}`);
        fetchTasks();
      } catch (err) {
        setError('Failed to delete task');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">DevTrack Lite</h1>
              <p className="text-gray-600">Welcome, {user.name}!</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}

        {/* Create Task Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Task</h2>
          <form onSubmit={handleCreateTask} className="flex gap-2">
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="What do you need to do?"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Add Task
            </button>
          </form>
        </div>

        {/* Tasks List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your Tasks</h2>
          
          {loading ? (
            <p className="text-gray-600 text-center py-8">Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p className="text-gray-600 text-center py-8">No tasks yet. Create one above!</p>
          ) : (
            <div>
              {/* Todo Tasks */}
              {tasks.filter(t => t.status === 'Todo').length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">📝 To Do</h3>
                  {tasks
                    .filter(t => t.status === 'Todo')
                    .map(task => (
                      <TaskCard
                        key={task._id}
                        task={task}
                        onUpdateStatus={handleUpdateStatus}
                        onDelete={handleDeleteTask}
                      />
                    ))}
                </div>
              )}

              {/* In Progress Tasks */}
              {tasks.filter(t => t.status === 'In Progress').length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">⏳ In Progress</h3>
                  {tasks
                    .filter(t => t.status === 'In Progress')
                    .map(task => (
                      <TaskCard
                        key={task._id}
                        task={task}
                        onUpdateStatus={handleUpdateStatus}
                        onDelete={handleDeleteTask}
                      />
                    ))}
                </div>
              )}

              {/* Done Tasks */}
              {tasks.filter(t => t.status === 'Done').length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-3">✅ Done</h3>
                  {tasks
                    .filter(t => t.status === 'Done')
                    .map(task => (
                      <TaskCard
                        key={task._id}
                        task={task}
                        onUpdateStatus={handleUpdateStatus}
                        onDelete={handleDeleteTask}
                      />
                    ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
