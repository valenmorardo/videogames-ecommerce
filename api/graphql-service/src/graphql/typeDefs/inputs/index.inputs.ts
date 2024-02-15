import { readFileSync } from 'fs';
import path from 'path';

const UserCreate: string = readFileSync(
	path.join(__dirname, './userCreate.type.graphql'),
	{
		encoding: 'utf-8',
	},
);

const Inputs = {
	UserCreate
}

export default Inputs