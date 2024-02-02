import { typeDefs, resolvers } from 'src/graphql';
import { ApolloServer } from '@apollo/server';


const apolloServer = new ApolloServer({
typeDefs,
resolvers
})

export default apolloServer;