const typeDefs = `
    type Query {
        welcome: String
    }
`;

const resolvers = {
	Query: {
		welcome: (parents, args, context, info) => {
			const { req, res, next } = context;

			return 'Welcome';
		},
	},
};

export { typeDefs, resolvers };
