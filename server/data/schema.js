import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {
    hello: String
  }
  
  schema {
    query: Query
  }
`;

const schema = makeExecutableSchema({ typeDefs });

addMockFunctionsToSchema({ schema, resolvers });

export default schema;