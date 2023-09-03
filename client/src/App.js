import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Users from './components/Users';
import Home from './components/Home';
import React from 'react';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
