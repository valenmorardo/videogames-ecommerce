import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

const errorHandlerRoutes: ErrorRequestHandler = (
	error,
	_req,
	res,
	_next,
): Response => {
	const status: number = error.response ? error.response.status : error.status;

	return res.status(status || 500).send({
		message: error.message,
		error_message: error.error_message,
		error_additionalData: error.additionalData,
	});
};

export default errorHandlerRoutes;