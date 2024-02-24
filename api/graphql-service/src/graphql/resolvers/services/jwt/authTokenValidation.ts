import { IPayloadAuthToken } from './../../typings/payloadJWT.d';
import customGraphQLError from '../errors/customGraphQLError';
import httpErrors from '../errors/httpErrors/index.errors';

import env from '@utils/varEnvironments';

import jwt from 'jsonwebtoken';
import prisma from '@DB/index';
import { GraphQLError } from 'graphql';

const authTokenValidation = async (
	auth_token: string,
	userIdExt: string,
): Promise<void | GraphQLError> => {
	try {
		if (!auth_token || !userIdExt) {
			throw new httpErrors.Unauthorized('No esta autenticado');
		}

		const payload = jwt.verify(
			auth_token,
			env.JWT_SECRET || 'JWT_SECRET',
		) as IPayloadAuthToken;

		if (!payload.userId) {
			throw new httpErrors.Unauthorized('No esta autenticado');
		}

		const userExcistence = await prisma.user.findUnique({
			where: {
				id: payload.userId,
			},
		});

		if (!userExcistence) {
			throw new httpErrors.Unauthorized('No esta autenticado');
		}

		if (userExcistence.id !== userIdExt)
			throw new httpErrors.Unauthorized('No esta autenticado');

	} catch (error) {
		return customGraphQLError(error);
	}
};

export default authTokenValidation;
