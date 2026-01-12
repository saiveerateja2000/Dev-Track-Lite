import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <h3 className="font-bold text-lg">{task.title}</h3>
      <p className="text-gray-600">Status: {task.status}</p>
      {/* Update and delete buttons will be added by student */}
    </div>
  );
};

export default TaskCard;
