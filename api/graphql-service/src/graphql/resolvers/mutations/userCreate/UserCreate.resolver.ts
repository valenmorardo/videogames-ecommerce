//TYPES
import { IResolverContext } from '@libs/typings/resolverContext';
import { IUserAttributes } from '@DB/typings/userAttributes';
import { InewUser } from '@graphql/typings/newUser';
import { IformattedCustomGraphQLError } from '@libs/typings/formattedCustomGraphQLError';

import prisma from 'src/DB';

import newUserValidation from './newUserFields.JoiValidation';

import encryptPassword from './encryptPassword';

const UserCreate = async (
	_parent: any,
	args: {
		input: { name: string; email: string; username: string; password: string };
	},
	_context: IResolverContext,
	_info: any,
): Promise<IUserAttributes | IformattedCustomGraphQLError> => {
	try {
		//validate user and refactor fields
		const userValidated = newUserValidation(args.input) as InewUser;

		// password encrypted
		const passwordEncrypted = (await encryptPassword(
			userValidated.password,
		)) as string;

		// user create and added to DB
		const newUser = await prisma.user.create({
			data: {
				name: userValidated.name,
				email: userValidated.email,
				username: userValidated.username,
				password: passwordEncrypted,
			},
		});

		return newUser;
	} catch (error) {
		return error;
	}
};

export default UserCreate;
