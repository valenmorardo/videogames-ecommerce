import prisma from '@DB/index';
import authTokenValidation from '@graphql/resolvers/services/jwt/authTokenValidation';

const AsUserRemoveGameFromWishlist = async (_parent, args, context, _info) => {
	const auth_token = context.req.headers.auth_token;
	const { userId, gameId } = args.input;

	await authTokenValidation(auth_token, userId);

	const gameRemovedFromWishlist = await prisma.wishlist.update({
		where: {
			userId: userId,
		},
		data: {
			games: {
				disconnect: {
					id: gameId,
				},
			},
		},
		include: {
			games: true,
		},
	});
	return gameRemovedFromWishlist;
};

export default AsUserRemoveGameFromWishlist;
