const typeDefs = `
    type User {
        id: String
        name: String
        email: String
    }

    type Query {
        user(id: String): User
        users: [User]
    }

    type Mutation {
        userUpdate(id: String): User
    }
`;

const resolvers = {
	Query: {
		user: () => {
			return [];
		},

		users: () => {
			return [];
		},
	},

	Mutation: {
        userUpdate: () => {
            return {msg: 'usuario actualizado'}
        }
    },
};

export { typeDefs, resolvers };
