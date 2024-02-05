import { expressMiddleware } from '@apollo/server/express4';
import apolloServerPublic from 'src/app/apollo/apolloServerPublic';
import { Request, Response, NextFunction } from 'express';

import { IMyContext } from '@libs/typings/MyContext';

const expressMiddlewarePublicApolloSv = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const context = async (): Promise<IMyContext> => {
			return { req, res, next };
		};

		return expressMiddleware(apolloServerPublic, { context })(req, res, next);
	} catch (error) {
		console.log(error);
		next(error);
	}
};

export default expressMiddlewarePublicApolloSv;
