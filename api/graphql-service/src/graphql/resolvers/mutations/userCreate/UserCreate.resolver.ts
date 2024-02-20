//TYPES
import { IResolverContext } from '@libs/typings/resolverContext';
import { IUserAttributes } from '@DB/typings/userAttributes';

import prisma from 'src/DB';

import newUserValidation from './helpers/newUser.Validation';
import encryptPassword from './helpers/encryptPassword';
import { InewUser } from '@graphql/resolvers/typings/newUser';

import { GraphQLError } from 'graphql';

const UserCreate = async (
	_parent: any,
	args: {
		input: { name: string; email: string; username: string; password: string };
	},
	_context: IResolverContext,
	_info: any,
): Promise<IUserAttributes | GraphQLError> => {
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

	console.log(newUser);

	return newUser;
};

export default UserCreate;
