import prisma from '@DB/index';
import { IResolverContext } from 'src/typings/resolverContext';
import { Prisma } from '@prisma/client';

const GetAllGames = async (
	_parent: any,
	args: any,
	context: IResolverContext,
	_info: any,
) => {
	const { orderProp, orderType, filterProp, filterType } = args.input;

	let orderBy = {
		[orderProp]: orderType,
	};
	if (!orderProp || !orderType) {
		orderBy = undefined;
	}
    
	let where = {
		[filterProp]: {
			some: {
				name: filterType,
			},
		},
	};
	if (!filterProp || !filterType) {
		where = undefined;
	}

	const AllGames = await prisma.game.findMany({
		where,
		orderBy,
		include: {
			publisher: true,
			platforms: true,
			genres: true,
			wishlists: true,
		},
	});

	return AllGames;
};

export default GetAllGames;
