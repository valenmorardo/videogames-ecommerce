import { IUserLogin } from '@graphql/resolvers/typings/userLogin';

import Joi from 'joi';
import { ObjectSchema } from 'joi';

import httpErrors from '@graphql/resolvers/services/errors/httpErrors/index.errors';
import { GraphQLError } from 'graphql';
import customGraphQLError from '@graphql/resolvers/services/errors/customGraphQLError';

const LoginFieldsSchema: ObjectSchema<IUserLogin> = Joi.object({
	email: Joi.string()
		.required()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net'] },
		})
		.trim(),

	password: Joi.string().required(),
});

const UserLoginFieldsValidation = (
	userLoginData: IUserLogin,
): IUserLogin | GraphQLError => {
	try {
		const validation = LoginFieldsSchema.validate(userLoginData);

		if (validation.error) {
			throw new httpErrors.BadRequest(validation.error.message);
		}
		return validation.value;
	} catch (error) {
		return customGraphQLError(error);
	}
};

export default UserLoginFieldsValidation;
