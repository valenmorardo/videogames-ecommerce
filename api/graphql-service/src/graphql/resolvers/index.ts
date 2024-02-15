//Querys
import Saludo from './querys/saludo/saludo.resolver';

//Mutations
import UserCreate from './mutations/userCreate/UserCreate.resolver';

const Resolvers = {
	Querys: {
		Saludo,
	},

	Mutations: {
		UserCreate,
	},
};

export default Resolvers;
