import prisma from '@DB/index';
import authTokenValidation from '@graphql/resolvers/services/jwt/authTokenValidation';

const AsUserAddGameToWishlist = async (
	_parent: any,
	args: any,
	context: any,
	_info: any,
): Promise<any> => {
	const auth_token = context.req.headers.auth_token;

	const { userId, gameId } = args.input;

	await authTokenValidation(auth_token, userId);

		const gameAddedToWishlist = await prisma.wishlist.upsert({
			where: { userId: userId },
			update: {
			  games: {
				connect: { id: gameId },
			  },
			},
			create: {
			  userId: userId,
			  games: {
				connect: { id: gameId },
			  },
			},
			include: {
			  User: true,
			  games: true, 
			},
		});
		return gameAddedToWishlist;
	
};

export default AsUserAddGameToWishlist;
