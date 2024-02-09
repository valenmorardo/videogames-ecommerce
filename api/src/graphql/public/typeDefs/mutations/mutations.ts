import { readFileSync } from 'fs';
import path from 'path';

const UserCreate_MType: string = readFileSync(
	path.join(__dirname, './userCreate.type.graphql'),
	{
		encoding: 'utf-8',
	},
);

export { UserCreate_MType };