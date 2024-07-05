//Querys
import Saludo from './querys/saludo/saludo.resolver';

//Mutations
import NewUser from './mutations/newUser/NewUser.resolver';
import UserLogin from './mutations/userLogin/UserLogin.resolver';
import PublisherCreate from './mutations/publisher/publisherCreate/PublisherCreate.resolver';
import CreateGameAsPublisher from './mutations/publisher/createGameAsPublisher/CreateGameAsPublisher';
import AsUserAddGameToWishlist from './mutations/wishlist/AsUserAddGameToWishlist.resolver';

const Resolvers = {
	Querys: {
		Saludo,
	},

	Mutations: {
		NewUser,
		UserLogin,
		PublisherCreate,
		CreateGameAsPublisher,
		AsUserAddGameToWishlist,
	},
};

export default Resolvers;
