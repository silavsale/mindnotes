import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import fs from 'fs';
import path from 'path';
import { resolvers } from './resolvers/resolvers';  // Adjust according to your structure

const app = express();

// Read the GraphQL schema from the file
const typeDefs = gql(fs.readFileSync(path.join(__dirname, 'schema/schema.graphql'), 'utf8'));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.start().then(() => {
  server.applyMiddleware({
    app,
    cors: true,
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(
    `GraphQL Endpoint: http://localhost:${PORT}${server.graphqlPath}`
  );
});
