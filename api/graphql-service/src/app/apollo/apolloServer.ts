import { typeDefs, resolvers } from '@graphql/index';
import { ApolloServer } from '@apollo/server';

import { IResolverContext } from '@libs/typings/resolverContext';
import { GraphQLFormattedError } from 'graphql';
import { IformattedCustomGraphQLError } from '@libs/typings/formattedCustomGraphQLError';
import { FormattedCustomGraphQLError } from '@utils/formattedCustomGraphQLError';

const myApolloServer: ApolloServer<IResolverContext> = new ApolloServer({
	typeDefs,
	resolvers,

	formatError: (error: GraphQLFormattedError): IformattedCustomGraphQLError => {
		const { message, extensions } = error;

		const formattedError = new FormattedCustomGraphQLError(
			message,
			extensions && typeof extensions.code === 'string'
				? extensions.code
				: 'INTERNAL_SERVER_ERROR',
			extensions && typeof extensions.status === 'number'
				? extensions.status
				: 500,
			extensions?.additional_data,
		);

		return formattedError;
	},
});

export default myApolloServer;
