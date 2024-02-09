import { CustomError } from './customError';

const errorHandler = (error: Error | any) => {
	const { message, status, code, data } = error;
	console.log(error);

	return new CustomError(message, status, code, data);
};

export default errorHandler;
