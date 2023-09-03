import 'graphql-import-node';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import resolvers from './graphql/resolvers';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));

const typeDefs = readFileSync(
  join(currentDir, './graphql/schema.graphql'),
  'utf8'
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`🚀 Server listening at: ${url}`);
