import { IAdditionalDataError } from '@libs/typings/additionalDataError';

import customGraphQLError from '../customGraphQLError';

import { GraphQLError } from 'graphql';

const forbidden = (
	message: string,
	data?: IAdditionalDataError,
): GraphQLError => {
	return customGraphQLError(message, 403, 'FORBIDDEN', data);
};

export default forbidden;
