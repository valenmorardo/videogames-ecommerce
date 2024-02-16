import bcrypt from 'bcryptjs';

const encryptPassword = async (password: string): Promise<string | Error> => {
	try {
		const salt: string = await bcrypt.genSalt(8);
		const encryptedPassword: string = await bcrypt.hash(password, salt);

		return encryptedPassword;
	} catch (error) {
		return error;
	}
};

export default encryptPassword;
