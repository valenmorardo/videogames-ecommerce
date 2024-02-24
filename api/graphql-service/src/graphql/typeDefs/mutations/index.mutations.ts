import { readFileSync } from 'fs';
import path from 'path';

const UserCreate: string = readFileSync(
	path.join(__dirname, './userCreate.mutation.graphql'),
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
	UserCreate,
	UserLogin,
	PublisherCreate,
};

export default Mutations;
