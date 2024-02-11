import { expressMiddleware } from '@apollo/server/express4';
import apolloServerAdmin from './apolloServerAdmin';
import { Request, Response, NextFunction } from 'express';
import { IResolverContext } from '../../../graphql/typings/resolverContext';

const expressMiddlewareAdminApolloSv = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const context = async (): Promise<IResolverContext> => {
			return { req, res, next };
		};

		return expressMiddleware(apolloServerAdmin, { context })(req, res, next);
	} catch (error) {
		console.log(error);
		next(error);
	}
};

export default expressMiddlewareAdminApolloSv;
