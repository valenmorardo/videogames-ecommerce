import { IAdminAttributes } from '@DB/typings/adminAttributes';
import jwt, { Jwt } from 'jsonwebtoken';
import env from '@utils/varEnvironments';
import { GraphQLError } from 'graphql';
import customGraphQLError from '@graphql/resolvers/services/errors/customGraphQLError';



const jwtCreate = (userId: string, adminProp: null | IAdminAttributes): string | GraphQLError => {
	try {
		
		const auth_token: string = jwt.sign(
			{ userId, isAdmin: adminProp },
			env.JWT_SECRET || 'JWT_SECRET',
			{ expiresIn: env.JWT_EXPIRES_IN || '1h' },
		);


		return auth_token;
	} catch (error) {
		return customGraphQLError(error);
	}
};

export default jwtCreate;
