import { typeDefs, resolvers } from 'src/graphql/private';
import { ApolloServer } from '@apollo/server';

const apolloServerPrivate: ApolloServer = new ApolloServer({
	typeDefs,
	resolvers,
});

export default apolloServerPrivate;
