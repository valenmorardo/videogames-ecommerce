import { Router } from 'express';
import errorHandlerRoutes from './errorHandlerRoutes';
import axios from 'axios';
import { CustomError } from '@utils/customError';

const router = Router();

router.get('/', (_req, res, _next) => {
	res.send('GATEWAY ---> /gateway method: POST');
});

router.get('/gateway', async (req, res, next) => {
	try {
		const bodyTest = {
			query:
				'mutation UserCreate($input: UserCreate!) { UserCreate(input: $input) { name, email, username, password} }',
			variables: {
				input: {
					email: 'valentin@gmail.com',
					username: 'valentin',
					password: 'hola123',
				},
			},
		};

		const response = await axios.post(
			'http://localhost:3005/graphql',
			bodyTest,
			{
				headers: {
					'url-Authorization': 123,
				},
			},
		);
		
		res.status(response.status).send({
			data: response.data,
			response_code: response.statusText,
			response_status: response.status,
		});
	} catch (error) {
		next(error);
	}
});

router.post('/gateway', (_req, res, _next) => {
	res.send('hola');
});

router.use('*', (_req, _res) => {
	throw new Error('Page Not found');
});
router.use(errorHandlerRoutes);

export default router;
