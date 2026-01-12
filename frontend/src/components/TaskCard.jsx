import React from 'react';

const TaskCard = ({ task, onUpdateStatus, onDelete }) => {
  const statusColors = {
    'Todo': 'bg-gray-200 text-gray-800',
    'In Progress': 'bg-yellow-200 text-yellow-800',
    'Done': 'bg-green-200 text-green-800'
  };

  const nextStatus = {
    'Todo': 'In Progress',
    'In Progress': 'Done',
    'Done': 'Todo'
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 border-l-4 border-blue-500">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-lg text-gray-800">{task.title}</h3>
        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          Delete
        </button>
      </div>

      <div className="flex items-center justify-between">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[task.status]}`}>
          {task.status}
        </span>
        <button
          onClick={() => onUpdateStatus(task._id, nextStatus[task.status])}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-sm"
        >
          Move to {nextStatus[task.status]}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
