import { CustomError } from './customError';

const errorHandler = (error: Error | any) => {
	const { message, status, code, data } = error;
	const newCustomError = new CustomError(message, status, code, data);
	console.log(newCustomError)
	return newCustomError
};

export default errorHandler;
