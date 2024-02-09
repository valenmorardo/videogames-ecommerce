import { typeDefs, resolvers } from 'src/graphql/admin';
import { ApolloServer } from '@apollo/server';

const apolloServerAdmin: ApolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

export default apolloServerAdmin;
