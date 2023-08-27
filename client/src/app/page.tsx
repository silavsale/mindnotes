'use client'; // This is a client component 👈🏽

import CreateTask from '@/components/CreateTask';
import Task from '../components/Task';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const addTask = () => {
    const taskData = {
      name: 'Sample Task',
      created: new Date(),
      updated: new Date(),
      body: 'Task description',
      author: 'John Doe',
      status: 'Incomplete',
    };

    fetch('/api/addTask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage('Task added successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Failed to add task.');
      });
  };

  return (
    <>
      <div className=" grid content-center place-content-center m-5">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            Add new note
          </h5>
          <h1>Task Manager</h1>
          <button className="rounded-lg bg-slate-600 m-2 p-1" onClick={addTask}>
            Add Sample Task
          </button>
          {message && <p>{message}</p>}
        </a>
      </div>
      <CreateTask />
      <Task />
    </>
  );
}
