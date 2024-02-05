
const errorHandler = (error: Error | any) => {
	const status: number = error.status
		? error.status
		: error.response
		  ? error.response.status
		  : 500;
	console.log({
		error,
		status,
	});
	return { error, status };
};

export default errorHandler;
