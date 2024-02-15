import { IAdditionalDataError } from '@libs/typings/additionalDataError';
import { GraphQLError } from 'graphql';

const forbidden = (
	message: string,
	data?: IAdditionalDataError,
): GraphQLError => {
	throw new GraphQLError(message, {
		extensions: {
			status: 403,
			code: 'FORBIDDEN',
			data,
		},
	});
};

export default forbidden;
