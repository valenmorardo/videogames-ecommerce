import { readFileSync } from 'fs';
import path from 'path';

const User: string = readFileSync(path.join(__dirname, './user.graphql'), {
	encoding: 'utf-8',
});

const LoginResponse: string = readFileSync(
	path.join(__dirname, './loginResponse.graphql'),
	{
		encoding: 'utf-8',
	},
);

const Publisher: string = readFileSync(
	path.join(__dirname, './publisher.graphql'),
	{
		encoding: 'utf-8',
	},
);

const Types = {
	User,
	LoginResponse,
	Publisher
};

export default Types;
