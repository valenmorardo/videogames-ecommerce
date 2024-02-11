import { expressMiddleware } from '@apollo/server/express4';
import apolloServerPublic from '@app/apollo/public/apolloServerPublic';
import { Request, Response, NextFunction } from 'express';

import { IResolverContext } from '../../../graphql/typings/resolverContext';

const expressMiddlewarePublicApolloSv = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const context = async (): Promise<IResolverContext> => {
			return { req, res, next };
		};

		return expressMiddleware(apolloServerPublic, { context })(req, res, next);
	} catch (error) {
		console.log(error);
		next(error);
	}
};

export default expressMiddlewarePublicApolloSv;
