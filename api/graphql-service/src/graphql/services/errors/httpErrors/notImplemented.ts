import { IAdditionalDataError } from '@libs/typings/additionalDataError';

import customGraphQLError from '../customGraphQLError';

import { GraphQLError } from 'graphql';

const notImplemented = (
	message: string,
	data?: IAdditionalDataError,
): GraphQLError => {
	return customGraphQLError(message, 501, 'NOT_IMPLEMENTED', data);
};

export default notImplemented;
