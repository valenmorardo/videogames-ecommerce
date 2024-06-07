import customGraphQLError from '@graphql/resolvers/services/errors/customGraphQLError';

import httpErrors from '@graphql/resolvers/services/errors/httpErrors/index.errors';

import Joi from 'joi';
import { ObjectSchema } from 'joi';

import prisma from '@DB/index';

const newGameFieldsSchema: ObjectSchema<any> = Joi.object({
	userId: Joi.string()
		.required()
		.guid({
			version: ['uuidv4'],
			separator: '-',
		}),

	publisherId: Joi.string()
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

	description: Joi.string()
		.required()
		.trim()
		.custom((value) => {
			if (value.length > 250) {
				throw new Error(
					'La descripcion no puede ser de mas de 250 caracteres.',
				);
			}
			return value.replace(/\s+/g, ' ');
		}),
	price: Joi.number().required(),

	released: Joi.string().required().trim(),

	alternative_names: Joi.array()
		.items(
			Joi.string()
				.trim()
				.custom((value) => {
					return value.replace(/\s+/g, ' ');
				}),
		)
		.required(),

	background_image: Joi.string()
		.trim()
		.custom((value): boolean | Error => {
			const onlyImgUrl =
				/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp)$/;

			if (onlyImgUrl.test(value)) {
				throw new Error('La url no es valida.');
			}
			return value;
		}),

	screenshots: Joi.array().items(
		Joi.string()
			.trim()
			.custom((value) => {
				const onlyImgUrl =
					/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp)$/;

				if (onlyImgUrl.test(value)) {
					throw new Error('La url no es valida.');
				}
				return value;
			}),
	),

	genresIds: Joi.array()
		.items(Joi.number().required())
		.required()
		.custom((value) => {
			const ids = [];
			value.map((id: number) => {
				ids.push({ id: id });
			});
			return ids
		}),
		
	platformsIds: Joi.array()
		.items(Joi.number().required())
		.required()
		.custom((value) => {
			const ids = [];
			value.map((id: number) => {
				ids.push({ id: id });
			});
			return ids
		}),
});

const newGameValidation = async (newGame: any): Promise<any> => {
	try {
		const validation = newGameFieldsSchema.validate(newGame);
		if (validation.error) {
			throw new httpErrors.BadRequest(validation.error.message);
		}

		const gameAlreadyExists = await prisma.game.findUnique({
			where: {
				name: validation.value.name,
			},
		});

		if (gameAlreadyExists) {
			throw new httpErrors.BadRequest('El juego ya existe.');
		}

		return validation.value;
	} catch (error) {
		return customGraphQLError(error);
	}
};

export default newGameValidation;
