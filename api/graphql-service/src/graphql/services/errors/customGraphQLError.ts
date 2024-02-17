import { IAdditionalDataError } from '@libs/typings/additionalDataError';
import { GraphQLError } from 'graphql';

const customGraphQLError = (
	message: string,
	status?: number,
	code?: string,
	data?: IAdditionalDataError,
): GraphQLError => {
	throw new GraphQLError(message, {
		extensions: {
			status,
			code,
			data,
		},
	});
};

export default customGraphQLError;
