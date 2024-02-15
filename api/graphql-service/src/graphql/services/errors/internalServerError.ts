import { IAdditionalDataError } from '@libs/typings/additionalDataError';
import { GraphQLError } from 'graphql';

const internalServerError = (
	message: string,
	data?: IAdditionalDataError,
): GraphQLError => {
	throw new GraphQLError(message, {
		extensions: {
			status: 500,
			code: 'INTERNAL_SERVER_ERROR',
			data,
		},
	});
};

export default internalServerError;
