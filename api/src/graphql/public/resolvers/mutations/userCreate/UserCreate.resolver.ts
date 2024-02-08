import { IResolverContext } from '@libs/typings/graphQL/resolverContext';
import { IUserAttributes } from '@libs/typings/DB/userAttributes';


import prisma from 'src/DB';

const UserCreate = async (_parent, args, context: IResolverContext, _info): Promise<IUserAttributes> => {
	const { name, email, username, password } = args.input;

	const newUser = await prisma.user.create({
		data: {
			name,
			email,
			username,
			password,
		},
	});
	console.log('New User:', newUser);
	return newUser;
};

export default UserCreate;
