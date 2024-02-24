import Types from './typeDefs/types/index.types';
import Inputs from './typeDefs/inputs/index.inputs';
import Querys from './typeDefs/querys/index.querys';
import Mutations from './typeDefs/mutations/index.mutations';

import Resolvers from './resolvers';

const typeDefs = `

${Types.User}
${Types.LoginResponse}

${Types.Publisher}


${Inputs.UserCreate}
${Inputs.UserLogin}

${Inputs.UserId}



type Query {
	${Querys.Saludo}
}



type Mutation {
	${Mutations.UserCreate}
	${Mutations.UserLogin}
	${Mutations.PublisherCreate}
}
  
`;

const resolvers = {
	Query: {
		Saludo: Resolvers.Querys.Saludo,
	},

	Mutation: {
		UserCreate: Resolvers.Mutations.UserCreate,
		UserLogin: Resolvers.Mutations.UserLogin,
	},
};

export { typeDefs, resolvers };
