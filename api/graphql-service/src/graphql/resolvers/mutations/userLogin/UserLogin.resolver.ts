import prisma from '@DB/index';

import userLoginFieldsValidation from './helpers/loginFields.Validation';

import userLoginDataValidation from './helpers/loginData.validation';
import { IUserLogin } from '@graphql/resolvers/typings/userLogin';
import { IUserAttributes } from '@DB/typings/userAttributes';
import jwtCreate from './helpers/jwtCreate';
import { IuserLogged } from '@graphql/resolvers/typings/userLogged';
import { GraphQLError } from 'graphql';

const UserLogin = async (
	_parent: any,
	args: {
		input: { email: string; password: string };
	},
	_context: any,
	_info: any,
): Promise<IuserLogged> => {
	const userFieldsValidated = userLoginFieldsValidation(
		args.input,
	) as IUserLogin;

	const userDataValidated = (await userLoginDataValidation(
		userFieldsValidated,
	)) as IUserAttributes;

	const auth_token = jwtCreate(userDataValidated.id, userDataValidated.admin) as string

	
	return {
		user: userDataValidated,
		auth_token,
	};

	
};

export default UserLogin;
