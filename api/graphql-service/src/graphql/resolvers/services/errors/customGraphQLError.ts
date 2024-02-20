import { ICustomError } from '@libs/typings/customError';
import { GraphQLError } from 'graphql';

const customGraphQLError = (error: any): GraphQLError => {

	const {message, status, code, data} = error
	
	throw new GraphQLError(message, {
		extensions: {
			status: status? status : 500,
			code: code? code : "INTERNAL_SERVER_ERROR",
			data: data? data : undefined,
		},
	});
};

export default customGraphQLError;
