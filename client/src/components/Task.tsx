import React from 'react';
import { TaskProps, TaskStatus } from './types'; // adjust the path as needed
import tasks from '../../data/tasks.json';
import Moment from 'moment';

const Task: React.FC<TaskProps> = () => {
  Moment.locale('en');

  return (
    <div>
      <div className="flex justify-center first-letter:text-gray-100 font-bold text-2xl mb-2">
        List of Notes
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 m-5">
        {tasks.tasks.map((task) => (
          <ul className="bg-sky-500 p-5 m-2 rounded-lg" key={task.id}>
            <li className="bg-sky-800 rounded-lg p-2 text-center">
              ID:{task.id}
            </li>
            <li className="text-sm">
              {Moment(task.created).format('HH:mm d/MMM/YY')}
            </li>
            <li className="text-sm">
              {Moment(task.updated).format('HH:mm d/MMM/YY')}
            </li>
            <li>{task.name}</li>
            <li>{task.body}</li>
            <li>{task.status}</li>
            <li>{task.author}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Task;
