import { typeDefs, resolvers } from 'src/graphql/public';
import { ApolloServer } from '@apollo/server';

const apolloServerPublic: ApolloServer= new ApolloServer({
	typeDefs,
	resolvers,
});

export default apolloServerPublic;
