import dotenv from 'dotenv';

dotenv.config();

const env = {
	PORT: process.env.PORT,
	JWT_SECRET: process.env.JWT_SECRET,
	JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
};

export default env;
