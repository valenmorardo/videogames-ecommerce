import { IAdditionalDataError } from '@libs/typings/additionalDataError';

import customGraphQLError from '../customGraphQLError';

import { GraphQLError } from 'graphql';

const badRequest = (
	message: string,
	data?: IAdditionalDataError,
): GraphQLError => {
	return customGraphQLError(message, 400, 'BAD_REQUEST', data);
};

export default badRequest;
