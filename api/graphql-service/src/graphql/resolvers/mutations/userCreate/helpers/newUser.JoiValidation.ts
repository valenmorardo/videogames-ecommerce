import { InewUser } from '@graphql/typings/newUser';
import newUserSchema from './newUser.JoiSchema';

import httpErrors from '@graphql/services/errors/httpErrors/index.errors';
import { GraphQLError } from 'graphql';

const newUserValidation = (
	newUser: InewUser,
): InewUser | GraphQLError => {
	const validation = newUserSchema.validate(newUser);

	if (validation.error) {
		return httpErrors.badRequest(validation.error.message)
		
	}
	return validation.value;
};

export default newUserValidation;
