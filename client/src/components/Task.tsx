import React from 'react';
import { TaskProps, TaskStatus } from '../types';  // adjust the path as needed

const Task: React.FC<TaskProps> = ({ id, date, name, body, author, status }) => {
  return (
    <div className="task">
      <h2>{name}</h2>
      <p>{body}</p>
      <div className="task-meta">
        <span>ID: {id}</span>
        <span>Date: {date.toISOString()}</span>
        <span>Author: {author}</span>
        <span>Status: {status}</span>
      </div>
    </div>
  );
}

export default Task;
