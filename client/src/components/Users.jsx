import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Spinner from './Spinner';
import { GET_USERS } from '../queries/userQueries';
import { DELETE_USER } from '../mutations/userMutations'; // Ensure you have this mutation

export default function Users() {
  const { loading, error, data, refetch } = useQuery(GET_USERS);
  const [deleteUser, { loading: deleteLoading, error: deleteError }] =
    useMutation(DELETE_USER);

  const handleDelete = async (email) => {
    try {
      await deleteUser({ variables: { email } });
      refetch(); // Refetching the list of users after a delete
    } catch (err) {
      console.error('Error deleting user:', err.message);
    }
  };

  if (loading || deleteLoading) return <Spinner />;
  if (error) return <p>Error fetching users: {error.message}</p>;
  if (deleteError) return <p>Error deleting user: {deleteError.message}</p>;

  return (
    <div className="m-1 bg-orange-400 rounded-lg p-1 w-1/2">
      {data.users.map((user) => (
        <div className="bg-slate-500 p-2 m-1 rounded-xl" key={user.id}>
          <div>Name:{user.name}</div>
          <div>Email:{user.email}</div>
          <button
            className="bg-red-500 rounded-lg p-1"
            onClick={() => handleDelete(user.email)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
