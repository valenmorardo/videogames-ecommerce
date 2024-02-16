import { InewUser } from '@graphql/typings/newUser';
import { GraphQLError } from 'graphql';

import newUserSchema from './newUser.JoiSchema';
import error from '@graphql/services/errors/index.errors';

const newUserValidation = (newUser: InewUser): InewUser | GraphQLError => {
	const validation = newUserSchema.validate(newUser);

	if (validation.error) {
		return error.badRequest(validation.error.message);
	}
	return validation.value;
};

export default newUserValidation;
