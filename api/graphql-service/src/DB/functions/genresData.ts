import { IGenresAttributes } from './../typings/genreAttributes.d';
import { readFileSync } from 'fs';
import path from 'path';

import prisma from '..';

const genresJson: string = readFileSync(
	path.join(__dirname, '../data/genres.json'),
	{
		encoding: 'utf-8',
	},
);

const genres = JSON.parse(genresJson);

const genresData = async (): Promise<void | Error> => {
	try {
		await prisma.genre.deleteMany({});

		genres.map(async (genre: IGenresAttributes) => {
			await prisma.genre.create({
				data: {
					id: genre.id,
					name: genre.name,
				},
			});
		});
	} catch (error) {
		return error;
	}
};

export default genresData;
