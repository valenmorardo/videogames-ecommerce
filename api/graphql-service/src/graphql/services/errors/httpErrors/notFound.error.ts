import { IAdditionalDataError } from '@libs/typings/additionalDataError';

import customGraphQLError from '../customGraphQLError';

import { GraphQLError } from 'graphql';

const notFound = (
	message: string,
	data?: IAdditionalDataError,
): GraphQLError => {
	return customGraphQLError(message, 404, 'NOT_FOUND', data);
};

export default notFound;
