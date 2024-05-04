//Querys
import Saludo from './querys/saludo/saludo.resolver';

//Mutations
import NewUser from './mutations/newUser/NewUser.resolver';
import UserLogin from './mutations/userLogin/UserLogin.resolver';
import PublisherCreate from './mutations/publisherCreate/PublisherCreate.resolver';

const Resolvers = {
	Querys: {
		Saludo,
	},

	Mutations: {
		NewUser,
		UserLogin,
		PublisherCreate
	},
};

export default Resolvers;
