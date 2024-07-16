//Querys
import Saludo from './querys/saludo/saludo.resolver';
import GetAllGames from './querys/Games/GetAllGames.resolver';
import GetAllGenres from './querys/genres/GetAllGenres.resolver';
import GetAllPlatforms from './querys/Platforms/GetAllPlatforms.resolver';
import GetAllPublishers from './querys/Publishers/GetAllPublishers.resolver';

//Mutations
import NewUser from './mutations/newUser/NewUser.resolver';
import UserLogin from './mutations/userLogin/UserLogin.resolver';
import PublisherCreate from './mutations/publisher/publisherCreate/PublisherCreate.resolver';
import CreateGameAsPublisher from './mutations/publisher/createGameAsPublisher/CreateGameAsPublisher';
import AsUserAddGameToWishlist from './mutations/wishlist/AsUserAddGameToWishlist.resolver';
import AsUserRemoveGameFromWishlist from './mutations/wishlist/AsUserRemoveGameFromWishlist.resolver';

const Resolvers = {
	Querys: {
		Saludo,
		GetAllGames,
		GetAllGenres,
		GetAllPlatforms,
		GetAllPublishers,
		
		
	},

	Mutations: {
		NewUser,
		UserLogin,
		PublisherCreate,
		CreateGameAsPublisher,
		AsUserAddGameToWishlist,
		AsUserRemoveGameFromWishlist,
	},
};

export default Resolvers;
