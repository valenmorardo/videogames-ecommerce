import { IResolverContext } from '@libs/typings/resolverContext';

import { IUserAttributes } from '@DB/typings/userAttributes';

import newUserValidation from '@graphql/middlewares/validations/newUserFields.validation';

import prisma from 'src/DB';
import { GraphQLError } from 'graphql';

const UserCreate = async (
	_parent,
	args,
	context: IResolverContext,
	_info,
): Promise<IUserAttributes | Error | any> => {
	const { req, res, next } = context;
	try {
		const { name, email, username, password } = args.input;

		newUserValidation({ name, email, username, password });

		const newUser = await prisma.user.create({
			data: {
				name,
				email,
				username,
				password,
			},
		});

		return newUser;
	} catch (error) {
		return error;
	}
};

export default UserCreate;
