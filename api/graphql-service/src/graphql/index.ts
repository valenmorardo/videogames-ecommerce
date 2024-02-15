import Types from './typeDefs/types/index.types';
import Inputs from './typeDefs/inputs/index.inputs';
import Querys from './typeDefs/querys/index.querys';
import Mutations from './typeDefs/mutations/index.mutations';

import Resolvers from './resolvers';

const typeDefs = `

${Types.User}




${Inputs.UserCreate}




type Query {
	${Querys.Saludo}
}



type Mutation {
	${Mutations.UserCreate}
}
  
`;

const resolvers = {
	Query: {
		Saludo: Resolvers.Querys.Saludo,
	},

	Mutation: {
		UserCreate: Resolvers.Mutations.UserCreate,
	},
};

export { typeDefs, resolvers };
