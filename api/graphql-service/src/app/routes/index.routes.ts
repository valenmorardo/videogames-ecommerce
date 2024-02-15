import { Router } from 'express';
import expressMiddlewareApolloSv from '@app/apollo/expressMiddlewareApolloSv';

import errorHandlerRoutes from './errorHandlerRoutes';
import { CustomError } from '@utils/customError';

const router = Router();

router.get('/', (req, res) => {
	res.send({
		welcome: 'Hello World!',
	});
});

router.use(
	'/graphql',
	(req, res, next) => {
		try {
			/// VALDIACION DE URL CONSULTORA, Pero queda comentado hasta terminar para poder utilizar la interfaz de graphQL
			
			/* const auth = req.headers['url-authorization'];
			if (auth !== '123') {
				res.status(401).send({
					message: 'No esta autorizado a consultar este endpoint.',
				});
			} */
			return next();
		} catch (error) {
			next(error);
		}
	},
	expressMiddlewareApolloSv,
);

//----------------------------------
router.use(errorHandlerRoutes);

export default router;
