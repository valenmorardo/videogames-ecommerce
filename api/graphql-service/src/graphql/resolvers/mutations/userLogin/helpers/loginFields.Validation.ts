import { IUserLogin } from '@graphql/resolvers/typings/userLogin';

import LoginFieldsSchema from './loginFields.Schema';

import httpErrors from '@graphql/resolvers/services/errors/httpErrors/index.errors';
import { GraphQLError } from 'graphql';
import customGraphQLError from '@graphql/resolvers/services/errors/customGraphQLError';

const LoginFieldsValidation = (
	userLoginData: IUserLogin,
): IUserLogin | GraphQLError => {
	try {
		const validation = LoginFieldsSchema.validate(userLoginData);

		if (validation.error) {
			throw new httpErrors.BadRequest(validation.error.message);
		}
		return validation.value;
	} catch (error) {
		return customGraphQLError(error)
	}
};

export default LoginFieldsValidation;
