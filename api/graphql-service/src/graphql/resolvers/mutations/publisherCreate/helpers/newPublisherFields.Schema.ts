import Joi from 'joi';

import { ObjectSchema } from 'joi';

import { INewPublisher } from '@graphql/resolvers/typings/newPublisher';

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

export default newPublisherFieldsSchema;
