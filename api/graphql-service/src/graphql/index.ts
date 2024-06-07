import Types from './typeDefs/types/index.types';
import Inputs from './typeDefs/inputs/index.inputs';
import Querys from './typeDefs/querys/index.querys';
import Mutations from './typeDefs/mutations/index.mutations';

import Resolvers from './resolvers';

const typeDefs = `
${Types.Game}
${Types.Genre}
${Types.Platform}
${Types.Admin}
${Types.User}
${Types.Publisher}
${Types.Wishlist}
${Types.LoginResponse}
${Types.PublisherCreated}



${Inputs.NewUser}
${Inputs.UserLogin}
${Inputs.PublisherCreate}
${Inputs.NewGame}



type Query {
	${Querys.Saludo}
}



type Mutation {
	${Mutations.NewUser}
	${Mutations.UserLogin}
	${Mutations.PublisherCreate}
	${Mutations.CreateGameAsPublisher}
}
  
`;

const resolvers = {
	Query: {
		Saludo: Resolvers.Querys.Saludo,
	},

	Mutation: {
		NewUser: Resolvers.Mutations.NewUser,
		UserLogin: Resolvers.Mutations.UserLogin,
		PublisherCreate: Resolvers.Mutations.PublisherCreate,
		NewGame: Resolvers.Mutations.CreateGameAsPublisher
	},
};

export { typeDefs, resolvers };
