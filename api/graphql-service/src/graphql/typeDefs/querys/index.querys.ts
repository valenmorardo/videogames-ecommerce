import { readFileSync } from 'fs';
import path from 'path';

const Saludo: string = readFileSync(
	path.join(__dirname, './saludo.type.graphql'),
	{
		encoding: 'utf-8',
	},
);

const Querys = {
	Saludo,
};

export default Querys;
