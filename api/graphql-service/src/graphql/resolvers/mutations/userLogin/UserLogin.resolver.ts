import UserLoginFieldsValidation from './helpers/userLoginFields.validation';
import userLoginDataValidation from './helpers/userLoginData.validation';

import { IUserLogin } from '@graphql/resolvers/typings/userLogin';
import { IUserAttributes } from '@DB/typings/userAttributes';
import jwtCreate from '@graphql/resolvers/services/jwt/jwtCreate';
import { IuserLogged } from '@graphql/resolvers/typings/userLogged';

const UserLogin = async (
	_parent: any,
	args: {
		input: { email: string; password: string };
	},
	_context: any,
	_info: any,
): Promise<IuserLogged> => {
	//valido los campos
	const userLoginFieldsValidated = UserLoginFieldsValidation(
		args.input,
	) as IUserLogin;

	//valido la data de cada campo
	const userDataValidated = (await userLoginDataValidation(
		userLoginFieldsValidated,
	)) as IUserAttributes;

	const auth_token = jwtCreate(
		userDataValidated.id,
		userDataValidated.admin,
	) as string;

	return {
		user: userDataValidated,
		auth_token,
	};
};

export default UserLogin;
