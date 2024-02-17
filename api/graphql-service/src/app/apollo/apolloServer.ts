import { typeDefs, resolvers } from '@graphql/index';
import { ApolloServer } from '@apollo/server';

import { IResolverContext } from '@libs/typings/graphql/resolverContext';
import { GraphQLFormattedError } from 'graphql';
import { IformattedCustomGraphQLError } from '@libs/typings/graphql/formattedCustomGraphQLError';
import { FormattedCustomGraphQLError } from '@utils/formattedCustomGraphQLError';

const myApolloServer: ApolloServer<IResolverContext> = new ApolloServer({
	typeDefs,
	resolvers,

	formatError: (error: GraphQLFormattedError): IformattedCustomGraphQLError => {
		const { message, extensions } = error;

		console.log(error);
		const formattedError = new FormattedCustomGraphQLError(
			message,
			extensions && typeof extensions.status === 'number'
				? extensions.status
				: 500,
			extensions && typeof extensions.code === 'string'
				? extensions.code
				: 'INTERNAL_SERVER_ERROR',
		);

		return formattedError;
	},
});

export default myApolloServer;