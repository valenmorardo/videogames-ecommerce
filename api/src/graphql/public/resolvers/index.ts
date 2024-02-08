//Querys
import Saludo from './querys/saludo/saludo.resolver';

//Mutations
import UserCreate from './mutations/userCreate/UserCreate.resolver';

const allResolvers = {
	Querys: {
		Saludo,
	},

	Mutations: {
		UserCreate,
	},
};

export default allResolvers;
