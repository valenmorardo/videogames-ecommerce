import { typeDefs, resolvers } from 'src/graphql/public';
import { ApolloServer } from '@apollo/server';


const apolloServerPublic = new ApolloServer({
typeDefs: typeDefs,
resolvers: resolvers
})

export default apolloServerPublic;