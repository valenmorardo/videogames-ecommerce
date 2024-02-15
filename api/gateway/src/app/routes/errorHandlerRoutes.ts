import { IAdditionalDataError } from '@libs/typings/additionalDataError';
import { Response, ErrorRequestHandler } from 'express';

const errorHandlerRoutes: ErrorRequestHandler = (
	error,
	_req,
	res: Response,
	_next,
): Response => {
	const status: number = error.response ? error.response.status : error.status;
	const code: string = error.response ? error.response.statusText : error.code;
	const data: IAdditionalDataError = error.response
		? error.response.data
		: error.data;

	return res.status(status || 500).send({
		message: error.message,
		error_code: code,
		error_status: status,
		error_data: data,
	});
};

export default errorHandlerRoutes;
