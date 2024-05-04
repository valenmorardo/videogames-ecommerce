import { IUserLogin } from '@graphql/resolvers/typings/userLogin';

import prisma from '@DB/index';
import httpErrors from '@graphql/resolvers/services/errors/httpErrors/index.errors';
import customGraphQLError from '@graphql/resolvers/services/errors/customGraphQLError';

import { IUserAttributes } from '@DB/typings/userAttributes';
import { GraphQLError } from 'graphql';

import bcrypt from 'bcryptjs';

const UserLoginDataValidation = async (
	userLoginData: IUserLogin,
): Promise<IUserAttributes | GraphQLError> => {
	try {
		const userFinded = await prisma.user.findUnique({
			where: {
				email: userLoginData.email,
			},
			include: {
				admin: true,
				publisher: true,
			},
		});

		console.log(userFinded)
		if (userFinded === null) {
			throw new httpErrors.NotFound('Usuario no encontrado.', {
				msg: 'soy error data',
			});
		}

		const passwordCheck: boolean = await bcrypt.compare(
			userLoginData.password,
			userFinded.password,
		);

		if (!passwordCheck) {
			throw new httpErrors.BadRequest('La contraseña no es correcta.');
		}

		return userFinded;
	} catch (error) {
		console.log(error);
		return customGraphQLError(error);
	}
};

export default UserLoginDataValidation;
