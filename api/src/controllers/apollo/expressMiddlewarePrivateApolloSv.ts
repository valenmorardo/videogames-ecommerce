import { expressMiddleware } from '@apollo/server/express4';
import apolloServerPrivate from 'src/app/apollo/apolloServerPrivate';
import { Request, Response, NextFunction } from 'express';

import { IResolverContext } from '@libs/typings/graphQL/resolverContext';

const expressMiddlewarePrivateApolloSv = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const context = async (): Promise<IResolverContext> => {
			return { req, res, next };
		};

		return expressMiddleware(apolloServerPrivate, { context })(req, res, next);
	} catch (error) {
		console.log(error);
		next(error);
	}
};

export default expressMiddlewarePrivateApolloSv;
