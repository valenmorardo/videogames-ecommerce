import { readFileSync } from 'fs';
import path from 'path';

const NewUser: string = readFileSync(
	path.join(__dirname, './newUser.mutation.graphql'),
	{
		encoding: 'utf-8',
	},
);

const UserLogin: string = readFileSync(
	path.join(__dirname, './userLogin.mutation.graphql'),
	{
		encoding: 'utf-8',
	},
);

const PublisherCreate: string = readFileSync(
	path.join(__dirname, './publisherCreate.mutation.graphql'),
	{
		encoding: 'utf-8',
	},
);

const Mutations = {
	NewUser,
	UserLogin,
	PublisherCreate,
};

export default Mutations;
