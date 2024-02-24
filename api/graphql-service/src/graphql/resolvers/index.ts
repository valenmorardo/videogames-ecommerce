//Querys
import Saludo from './querys/saludo/saludo.resolver';

//Mutations
import UserCreate from './mutations/userCreate/UserCreate.resolver';
import UserLogin from './mutations/userLogin/UserLogin.resolver';
import PublisherCreate from './mutations/publisherCreate/PublisherCreate.resolver';

const Resolvers = {
	Querys: {
		Saludo,
	},

	Mutations: {
		UserCreate,
		UserLogin,
		PublisherCreate
	},
};

export default Resolvers;
