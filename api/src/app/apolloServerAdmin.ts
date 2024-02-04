import { typeDefs, resolvers } from 'src/graphql/admin';
import { ApolloServer } from '@apollo/server';


const apolloServerAdmin = new ApolloServer({
typeDefs: typeDefs,
resolvers: resolvers
})

export default apolloServerAdmin;