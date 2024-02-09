import { typeDefs, resolvers } from '@graphql/public';
import { ApolloServer } from '@apollo/server';

import { IResolverContext } from '@libs/typings/graphql/resolverContext';
import { GraphQLFormattedError } from 'graphql';
import { IformattedCustomGraphQLError } from '@app/apollo/services/formattedCustomGraphQLError';
import { CustomGraphQLError } from '@app/apollo/services/customGraphQLError';

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
				: 'INTERNAL SERVER ERROR',
			path as (string | number)[],
			extensions?.additional_data,
		);

		return formattedError;
	},
});

export default apolloServerPublic;
