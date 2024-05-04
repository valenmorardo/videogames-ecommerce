import { InewUser } from '@graphql/resolvers/typings/newUser';
import Joi from 'joi';

import { ObjectSchema } from 'joi';

import httpErrors from '@graphql/resolvers/services/errors/httpErrors/index.errors';
import { GraphQLError } from 'graphql';
import customGraphQLError from '@graphql/resolvers/services/errors/customGraphQLError';

const newUserSchema: ObjectSchema<InewUser> = Joi.object({
	name: Joi.string()
		.required()
		.pattern(/^[a-zA-Z\s]+$/)
		.uppercase()
		.trim()
		.custom((value) => {
			return value.replace(/\s+/g, ' ');
		}),
	email: Joi.string()
		.required()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net'] },
		})
		.trim(),
	username: Joi.string().required().alphanum().min(3).max(30).trim(),
	password: Joi.string().required().min(3),
});

const newUserValidation = (newUser: InewUser): InewUser | GraphQLError => {
	try {
		const validation = newUserSchema.validate(newUser);

		if (validation.error) {
			throw new httpErrors.BadRequest(validation.error.message);
		}
		return validation.value;
	} catch (error) {
		return customGraphQLError(error);
	}
};

export default newUserValidation;
