import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_USER } from '../mutations/userMutations';
import { GET_USERS } from '../queries/userQueries';

export default function AddNote() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createUser] = useMutation(CREATE_USER, {
    onSuccess: () => {
      // Success actions
    },
    onError: (error) => {
      // Error actions
    },
    refetchQueries: [{ query: GET_USERS }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '') {
      return alert('Please fill in all fields');
    }

    createUser({
      variables: { name, email }, // Pass variables as an object
    });
    console.log('name', name);
    console.log('email', email);
    setName('');
    setEmail('');
  };

  return (
    <div className="m-3">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="placeholder-slate-800 bg-lime-600 border-l-rose-500 rounded-md p-2 w-full"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
        </div>
        <div className="mb-3 ">
          <input
            type="email"
            className="placeholder-slate-800 bg-lime-600 border-l-rose-500 rounded-md p-2 w-full"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <button
          type="submit"
          data-bs-dismiss="modal"
          className="rounded-lg bg-lime-600 p-2 shadow-black shadow-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
