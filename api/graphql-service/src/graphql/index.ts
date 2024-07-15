import Types from './typeDefs/types/index.types';
import Inputs from './typeDefs/inputs/index.inputs';
import Querys from './typeDefs/querys/index.querys';
import Mutations from './typeDefs/mutations/index.mutations';

import Resolvers from './resolvers';
import GetAllGenres from './resolvers/querys/genres/GetAllGenres.resolver';

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
${Inputs.addToWishlist}
${Inputs.RemoveGameFromWishlist}
${Inputs.GetAllGames}



type Query {
	${Querys.Saludo}
	${Querys.GetAllGames}
	${Querys.GetAllGenres}
}


type Mutation {
	${Mutations.NewUser}
	${Mutations.UserLogin}
	${Mutations.PublisherCreate}
	${Mutations.CreateGameAsPublisher}
	${Mutations.AsUserAddGameToWishlist}
	${Mutations.AsUserRemoveGameFromWishlist}
}
  
`;

const resolvers = {
	Query: {
		Saludo: Resolvers.Querys.Saludo,
		GetAllGames: Resolvers.Querys.GetAllGames,
		GetAllGenres: Resolvers.Querys.GetAllGenres,
	},

	Mutation: {
		NewUser: Resolvers.Mutations.NewUser,
		UserLogin: Resolvers.Mutations.UserLogin,
		PublisherCreate: Resolvers.Mutations.PublisherCreate,
		NewGame: Resolvers.Mutations.CreateGameAsPublisher,
		AsUserAddGameToWishlist: Resolvers.Mutations.AsUserAddGameToWishlist,
		AsUserRemoveGameFromWishlist: Resolvers.Mutations.AsUserRemoveGameFromWishlist

	},
};

export { typeDefs, resolvers };
