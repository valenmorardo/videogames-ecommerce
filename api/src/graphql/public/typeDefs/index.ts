import { Saludo_QType } from './querys/querys';
import { UserCreate_IType } from './inputs/inputs';
import { UserCreate_MType } from './mutations/mutations';

const Types = {
	Inputs: {
		UserCreate_IType,
	},

	Querys: {
		Saludo_QType,
	},

	Mutations: {
		UserCreate_MType,
	},
};

export default Types;
