import { read, readFileSync } from 'fs';
import path from 'path';

const UserCreate: string = readFileSync(
	path.join(__dirname, './userCreate.input.graphql'),
	{
		encoding: 'utf-8',
	},
);

const UserLogin: string = readFileSync(
	path.join(__dirname, './userLogin.input.graphql'),
	{
		encoding: 'utf-8',
	},
);

const UserId: string = readFileSync(
	path.join(__dirname, './userId.input.graphql'),
	{
		encoding: 'utf-8',
	},
);

const Inputs = {
	UserCreate,
	UserLogin,
	UserId,
	
};

export default Inputs;
