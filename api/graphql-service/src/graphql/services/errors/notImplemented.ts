import { IAdditionalDataError } from '@libs/typings/additionalDataError';
import { GraphQLError } from 'graphql';

const notImplemented = (
	message: string,
	data?: IAdditionalDataError,
): GraphQLError => {
	throw new GraphQLError(message, {
		extensions: {
			status: 501,
			code: 'NOT_IMPLEMENTED',
			data,
		},
	});
};

export default notImplemented;