import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const cleanDataInDB = async () => {
	try {
		await prisma.developer.deleteMany({});
		console.log('se borro todo lo de developer');
		await prisma.game.deleteMany({});
		console.log('se borro todo lo de game');
		await prisma.genre.deleteMany({});
		console.log('se borro todo lo de genre');
		await prisma.platform.deleteMany({});
		console.log('se borro todo lo de platform');
		await prisma.user.deleteMany({});
		console.log('se borro todo lo de user');
	} catch (error) {
		console.log(error);
	}
};

const mainTest = async () => {
	const juego = {
		name: 'call of duty',
		alternative_names: ['cod'],
		background_image: 'url',
		description: 'juego de tiros',
		price: 59,
		released: '24/06/2013',
		screenshots: ['url', 'url'],
		developerId: 7,
		platforms: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
		genres: [{ id: 707 }, { id: 706 }],
	};

	/* const newGame = await prisma.game.create({
		data: {
			name: juego.name,
			alternative_names: juego.alternative_names,
			background_image: juego.background_image,
			description: juego.description,
			price: juego.price,
			released: juego.released,
			screenshots: juego.screenshots,
			developerId: juego.developerId,
			platforms: {
				connect: juego.platforms,
			},
			genres: {
				connect: juego.genres,
			},
		},
	});
	console.log(newGame);

	await prisma.developer.update({
		where: {
			id: juego.developerId,
		},
		data: {
			games_count: {
				increment: 1,
			},
		},
	});

	const juegos = await prisma.game.findMany({
		include: {
			genres: true,
			platforms: true,
			developer: true,
		},
	});
	console.log(juegos); */

	/* const newAdmin = await prisma.admin.create({
		data: {
			userId: 6,
		},
	});

	console.log(newAdmin); */


	/* const newGameForUser = await prisma.user.update({
		where: {
			id: 7
		},
		data: {
			library: {
				connect: {id: 8}
			}
		}
	})

	const user = await prisma.user.findMany({
		include: {
			library: true
		}
	}) */
	



};

export { cleanDataInDB, mainTest };
