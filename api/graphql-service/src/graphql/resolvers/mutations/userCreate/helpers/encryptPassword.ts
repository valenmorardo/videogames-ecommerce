import customGraphQLError from '@graphql/services/errors/customGraphQLError';
import bcrypt from 'bcryptjs';
import { GraphQLError } from 'graphql';

const encryptPassword = async (password: string): Promise<string | Error> => {
	try {
		const salt: string = await bcrypt.genSalt(8);
		const encryptedPassword: string = await bcrypt.hash(password, salt);


		return encryptedPassword;
	} catch (error) {
		return customGraphQLError(
			error.message,
			error.status,
			error.code,
			error.data,
		);
	}
};

export default encryptPassword;
