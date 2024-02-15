import { IAdditionalDataError } from '@libs/typings/additionalDataError';
import { GraphQLError } from 'graphql';

const unauthorized = (
	message: string,
	data?: IAdditionalDataError,
): GraphQLError => {
	throw new GraphQLError(message, {
		extensions: {
			status: 401,
			code: 'UNAUTHORIZED',
			data,
		},
	});
};

export default unauthorized;
