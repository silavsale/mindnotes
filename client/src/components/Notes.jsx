import React from 'react';
import { useQuery } from '@apollo/client';
import Spinner from './Spinner';
import { GET_NOTES } from '../queries/noteQueries';

export default function Notes() {
  const { loading, error, data, refetch } = useQuery(GET_NOTES);

  if (loading) return <Spinner />;
  if (error) return <p>Error fetching users: {error.message}</p>;

  return (
    <div className="m-1 bg-orange-400 rounded-lg p-1 w-1/2">
      {data.notes.map((note) => (
        <div className="bg-slate-500 p-2 m-1 rounded-xl" key={note.id}>
          <div>Title:{note.title}</div>
          <div>Content:{note.content}</div>
        </div>
      ))}
    </div>
  );
}
