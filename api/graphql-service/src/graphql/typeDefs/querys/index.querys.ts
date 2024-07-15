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

const GetAllGenres: string = readFileSync(
	path.join(__dirname, './GetAllgenres.query.graphql'),
	{
		encoding: 'utf-8',
	},
);

const GetAllPlatforms: string = readFileSync(
	path.join(__dirname, './GetAllPlatforms.query.graphql'),
	{
		encoding: 'utf-8',
	},
);

const Querys = {
	Saludo,
	GetAllGames,
	GetAllGenres,
	GetAllPlatforms
};

export default Querys;
