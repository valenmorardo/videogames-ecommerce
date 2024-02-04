const typeDefs = `
    type Query {
        welcome: String
    }
`;

const resolvers = {
	Query: {
        welcome: () => {
            return 'Welcome'
        }
    },
};

export { typeDefs, resolvers };
