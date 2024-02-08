import { typeDefs, resolvers } from 'src/graphql/public';
import { ApolloServer } from '@apollo/server';
import { IResolverContext } from '@libs/typings/graphQL/resolverContext';

import { CustomGraphQLError } from './customGraphQLError';

import { IformattedGraphQLError } from '@libs/typings/graphQL/formattedGraphQLError';

const apolloServerPublic: ApolloServer<IResolverContext> = new ApolloServer({
	typeDefs,
	resolvers,
	formatError: (error): IformattedGraphQLError => {
		const { message, extensions, path } = error;

		const formattedError = new CustomGraphQLError(
			message,
			extensions && typeof extensions.code === 'string'
				? extensions.code
				: 'INTERNAL SERVER ERROR',
			extensions && typeof extensions.status === 'number'
				? extensions.status
				: 500,
			path as (string | number)[],
			extensions?.additional_data,
		);
		return formattedError;
	},
});

export default apolloServerPublic;
