import prisma from '@DB/index';
import authTokenValidation from '@graphql/resolvers/services/jwt/authTokenValidation';

import newGameValidation from './helpers/newGame.validation';

const CreateGameAsPublisher = async (
	_parent: any,
	args: any,
	context: any,
	_info: any,
): Promise<any> => {
	const auth_token = context.req.headers.auth_token;
	await authTokenValidation(auth_token, args.input.userId);

	const newGameValidated: any = await newGameValidation(args.input);

	console.log(newGameValidated)
	const newGame = await prisma.game.create({
		data: {
			name: newGameValidated.name,
			description: newGameValidated.description,
			price: newGameValidated.price,
			released: newGameValidated.released,
			alternative_names: newGameValidated.alternative_names,
			background_image: newGameValidated.background_image,
			screenshots: newGameValidated.screenshots,
			publisher: {
				connect: {
					id: newGameValidated.publisherId,
				},
			},
			platforms: {
				connect: newGameValidated.platformsIds
			  },
			genres: {
				connect: newGameValidated.genresIds
			}
		},
		include: {
			genres: true,
			publisher: true,
			platforms: true,
		}
	});

	
	console.log('SOY NEW GAME');
	console.log(newGame);
	return newGame;
};

export default CreateGameAsPublisher;
