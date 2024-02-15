import { IAdditionalDataError } from '@libs/typings/additionalDataError';
import { GraphQLError } from 'graphql';

const methodNotAllowed = (
	message: string,
	data?: IAdditionalDataError,
): GraphQLError => {
	throw new GraphQLError(message, {
		extensions: {
			status: 405,
			code: 'METHOD_NOT_ALLOWED',
			data,
		},
	});
};

export default methodNotAllowed;
