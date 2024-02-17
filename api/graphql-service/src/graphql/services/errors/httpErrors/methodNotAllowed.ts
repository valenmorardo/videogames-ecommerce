import { IAdditionalDataError } from '@libs/typings/additionalDataError';

import customGraphQLError from '../customGraphQLError';

import { GraphQLError } from 'graphql';

const methodNotAllowed = (
	message: string,
	data?: IAdditionalDataError,
): GraphQLError => {
	return customGraphQLError(message, 405, 'METHOD_NOT_ALLOWED', data);
};

export default methodNotAllowed;
