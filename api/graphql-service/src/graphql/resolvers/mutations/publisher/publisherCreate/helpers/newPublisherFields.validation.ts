import customGraphQLError from '@graphql/resolvers/services/errors/customGraphQLError';
import { INewPublisher } from '@graphql/resolvers/typings/newPublisher';
import httpErrors from '@graphql/resolvers/services/errors/httpErrors/index.errors';

import Joi from 'joi';
import { ObjectSchema } from 'joi';

import prisma from '@DB/index';
const newPublisherFieldsSchema: ObjectSchema<INewPublisher> = Joi.object({
	userId: Joi.string()
		.required()
		.guid({
			version: ['uuidv4'],
			separator: '-',
		}),

	name: Joi.string()
		.required()
		.pattern(/^[a-zA-Z0-9\s]+$/)
		.trim()
		.custom((value) => {
			return value.replace(/\s+/g, ' ');
		}),

	profilePhoto: Joi.string()
		.trim()
		.custom((value): boolean | Error => {
			const onlyImgUrl =
				/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp)$/;

			if (onlyImgUrl.test(value)) {
				throw new Error('La url no es valida.');
			}
			return true;
		}),
});

const newPublisherFieldsValidation = async (newPublisher: INewPublisher) => {
	try {
		const validation = newPublisherFieldsSchema.validate(newPublisher);
		if (validation.error) {
			throw new httpErrors.BadRequest(validation.error.message);
		}

		const userIsAlreadyPublisher = await prisma.publisher.findUnique({
			where: {
				userId: validation.value.userId,
			},
		});

		if (userIsAlreadyPublisher)
			throw new httpErrors.BadRequest(
				'usted ya posee una cuenta de publicador.',
			); 
			
		return validation.value;
	} catch (error) {
		return customGraphQLError(error);
	}
};

export default newPublisherFieldsValidation;
