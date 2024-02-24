import { expressMiddleware } from '@apollo/server/express4';
import myApolloServer from './apolloServer';
import { Request, Response, NextFunction } from 'express';

import { IResolverContext } from '../../typings/resolverContext';

const expressMiddlewareApolloSv = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const context = async (): Promise<IResolverContext> => {
			return { req, res, next };
		};

		return expressMiddleware(myApolloServer, { context })(req, res, next);
	} catch (error) {
		console.log(error);
		next(error);
	}
};

export default expressMiddlewareApolloSv;
