import { log } from 'console';
import { useState } from 'react';

function CreateTask() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const addTask = () => {
    const taskData = {
      name,
      created: new Date(),
      updated: new Date(),
      body,
      author: 'John Doe',
      status: 'in-progress',
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

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    addTask();
    setMessage('');
    setBody('');
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-blue-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmitHandler}
      >
        <div className="text-blue-800 font-bold uppercase text-center">
          Add new note
        </div>
        <div className="my-2">
          <input
            placeholder="Title"
            className="shadow appearance-none border rounded w-full p-2 my-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Body"
            className="shadow appearance-none border rounded w-full p-2 my-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save
          </button>
          <input
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          />
        </div>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
}

export default CreateTask;
