import { typeDefs, resolvers } from 'src/graphql/private';
import { ApolloServer } from '@apollo/server';


const apolloServerPrivate = new ApolloServer({
typeDefs: typeDefs,
resolvers: resolvers
})

export default apolloServerPrivate;