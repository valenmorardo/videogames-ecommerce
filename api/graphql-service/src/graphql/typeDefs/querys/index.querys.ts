import { readFileSync } from 'fs';
import path from 'path';

const Saludo: string = readFileSync(
	path.join(__dirname, './saludo.query.graphql'),
	{
		encoding: 'utf-8',
	},
);

const GetAllGames: string = readFileSync(
	path.join(__dirname, './GetAllGames.query.graphql'),
	{
		encoding: 'utf-8',
	},
);

const Querys = {
	Saludo,
	GetAllGames
};

export default Querys;
