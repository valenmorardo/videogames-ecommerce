//Querys
import Saludo from './querys/saludo/saludo.resolver';

//Mutations
import UserCreate from './mutations/userCreate/UserCreate.resolver';
import UserLogin from './mutations/userLogin/UserLogin.resolver';

const Resolvers = {
	Querys: {
		Saludo,
	},

	Mutations: {
		UserCreate,
		UserLogin
	},
};

export default Resolvers;
