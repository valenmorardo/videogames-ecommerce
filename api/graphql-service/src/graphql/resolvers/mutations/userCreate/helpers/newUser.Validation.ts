import { InewUser } from '@graphql/resolvers/typings/newUser';
import newUserSchema from './newUser.Schema';
import httpErrors from '@graphql/resolvers/services/errors/httpErrors/index.errors';
import { GraphQLError } from 'graphql';
import customGraphQLError from '@graphql/resolvers/services/errors/customGraphQLError';

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
