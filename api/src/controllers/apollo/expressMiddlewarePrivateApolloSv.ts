import { expressMiddleware } from '@apollo/server/express4';
import apolloServerPrivate from 'src/app/apollo/apolloServerPrivate';
import { Request, Response, NextFunction } from 'express';

import { IMyContext } from '@libs/typings/MyContext';

const expressMiddlewarePrivateApolloSv = async (
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<void> => {
	try {
		const context = async (): Promise<IMyContext> => {
			return { req, res, next };
		};

		return expressMiddleware(apolloServerPrivate, { context })(req, res, next);
	} catch (error) {
		console.log(error);
		next(error);
	}
};

export default expressMiddlewarePrivateApolloSv;
