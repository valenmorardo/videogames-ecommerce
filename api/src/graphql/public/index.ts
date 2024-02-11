import globalTypes from '@graphql/_globalTypes';

import Types from './typeDefs';
import allResolvers from './resolvers';


const typeDefs = `

${globalTypes.User}

${Types.Inputs.UserCreate_IType}

type Query {
	${Types.Querys.Saludo_QType}
}

type Mutation {
	${Types.Mutations.UserCreate_MType}
}
  
`;

const resolvers = {
	Query: {
		Saludo: allResolvers.Querys.Saludo,
	},

	Mutation: {
		UserCreate: allResolvers.Mutations.UserCreate,
	},
};

export { typeDefs, resolvers };
