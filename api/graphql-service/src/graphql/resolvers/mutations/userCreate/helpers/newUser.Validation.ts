import { InewUser } from '@graphql/resolvers/typings/newUser';
import newUserSchema from './newUser.Schema';
import httpErrors from '@graphql/resolvers/services/errors/httpErrors/index.errors';
import { GraphQLError } from 'graphql';

const newUserValidation = (newUser: InewUser): InewUser | GraphQLError => {
	const validation = newUserSchema.validate(newUser);

	if (validation.error) {
		throw new httpErrors.BadRequest(validation.error.message);
	}
	return validation.value;
};

export default newUserValidation;
