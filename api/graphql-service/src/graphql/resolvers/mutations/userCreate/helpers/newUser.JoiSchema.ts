import { InewUser } from '@graphql/typings/newUser';
import Joi from 'joi';

import { ObjectSchema } from 'joi';

const newUserSchema: ObjectSchema<InewUser> = Joi.object({
	name: Joi.string()
		.required()
		.pattern(/^[a-zA-Z\s]+$/)
		.uppercase()
		.trim()
		.custom((value) => {
			return value.replace(/\s+/g, ' ');
		}),

	email: Joi.string()
		.required()
		.email({
			minDomainSegments: 2,
			tlds: { allow: ['com', 'net'] },
		})
		.trim(),

	username: Joi.string().required().alphanum().min(3).max(30).trim(),

	password: Joi.string().required().min(3),
});

export default newUserSchema;
