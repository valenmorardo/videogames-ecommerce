import authTokenValidation from '@graphql/resolvers/services/jwt/authTokenValidation';
import newPublisherFieldsValidation from './helpers/newPublisherFields.validation';

import prisma from '@DB/index';
import { IPublisherAttributes } from '@DB/typings/publisherAttributes';
import { GraphQLError } from 'graphql';
import { INewPublisher } from '@graphql/resolvers/typings/newPublisher';

const PublisherCreate = async (
	_parent: any,
	args: any,
	context: any,
	_info: any,
): Promise<IPublisherAttributes | GraphQLError | any>=> {
	const auth_token = context.req.headers.auth_token;

	const newPublisherFieldsValidated: INewPublisher = await newPublisherFieldsValidation(args.input);

	await authTokenValidation(auth_token, args.input.userId);

	const newPublisher = await prisma.publisher.create({
		data: {
			name: newPublisherFieldsValidated.name,
			user: {
				connect: { id: newPublisherFieldsValidated.userId},
			},
		},
	});

	return newPublisher;
};

export default PublisherCreate;
