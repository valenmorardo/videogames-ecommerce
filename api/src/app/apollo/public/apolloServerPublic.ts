import { typeDefs, resolvers } from '@graphql/public';
import { ApolloServer } from '@apollo/server';

import { IResolverContext } from '@graphql/typings/resolverContext';
import { GraphQLFormattedError } from 'graphql';
import { IformattedCustomGraphQLError } from '@app/apollo/utils/formattedCustomGraphQLError';
import { CustomGraphQLError } from '@app/apollo/utils/customGraphQLError';

const apolloServerPublic: ApolloServer<IResolverContext> = new ApolloServer({
	typeDefs,
	resolvers,

	formatError: (error: GraphQLFormattedError): IformattedCustomGraphQLError => {
		const { message, extensions, path } = error;

		const formattedError = new CustomGraphQLError(
			message,
			extensions && typeof extensions.status === 'number'
				? extensions.status
				: 500,
			extensions && typeof extensions.code === 'string'
				? extensions.code
				: 'INTERNAL_SERVER_ERROR',
			path as (string | number)[],
			extensions?.additional_data,
		);

		return formattedError;
	},
});

export default apolloServerPublic;
