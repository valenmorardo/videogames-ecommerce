import authTokenValidation from '@graphql/resolvers/services/jwt/authTokenValidation';
import newPublisherFieldsValidation from './helpers/newPublisherFields.Validation';

import prisma from '@DB/index';

const PublisherCreate = async (
	_parent: any,
	args: any,
	context: any,
	_info: any,
) => {
	const auth_token = context.req.headers.auth_token;

	const newPublisherFieldsValidated = newPublisherFieldsValidation(args.input);

	await authTokenValidation(auth_token, args.input.userId);

	const newPublisher = await prisma.publisher.create({
		data: {
			name: newPublisherFieldsValidated.name,
			user: {
				connect: { id: newPublisherFieldsValidated.userId },
			},
		},
	});

	return newPublisher;
};

export default PublisherCreate;
