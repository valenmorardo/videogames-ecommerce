//TYPES
import { IResolverContext } from '@libs/typings/graphql/resolverContext';
import { IUserAttributes } from '@DB/typings/userAttributes';

import prisma from 'src/DB';

import newUserValidation from './helpers/newUser.JoiValidation';
import encryptPassword from './helpers/encryptPassword';
import { InewUser } from '@graphql/typings/newUser';

import { GraphQLError } from 'graphql';

const UserCreate = async (
	_parent: any,
	args: {
		input: { name: string; email: string; username: string; password: string };
	},
	_context: IResolverContext,
	_info: any,
): Promise<IUserAttributes | GraphQLError> => {
	try {

		const userValidated = newUserValidation(args.input) as InewUser;

		const encryptedPassword = (await encryptPassword(
			userValidated.password,
		)) as string;

		const newUser = await prisma.user.create({
			data: {
				name: userValidated.name,
				email: userValidated.email,
				username: userValidated.username,
				password: encryptedPassword,
			},
		});

		return newUser;
	} catch (error) {
		console.log(error)
		return error;
	}
};

export default UserCreate;
