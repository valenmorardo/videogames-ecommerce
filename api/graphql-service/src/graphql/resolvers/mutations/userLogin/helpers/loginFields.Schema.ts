import { IUserLogin } from '@graphql/resolvers/typings/userLogin';
import Joi from 'joi';

import { ObjectSchema } from 'joi';

const LoginFieldsSchema: ObjectSchema<IUserLogin> = Joi.object({
	email: Joi.string()
		.required()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net'] },
		})
		.trim(),

	password: Joi.string().required(),
});

export default LoginFieldsSchema;
