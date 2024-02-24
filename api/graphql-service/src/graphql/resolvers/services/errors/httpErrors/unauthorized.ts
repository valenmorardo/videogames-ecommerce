import { IAdditionalDataError } from 'src/typings/additionalDataError';

class Unauthorized {
	message!: string;
	status: number;
	code: string;
	data?: IAdditionalDataError;

	constructor(message: string, data?: IAdditionalDataError) {
		this.message = message;
		this.status = 401;
		this.code = 'UNAUTHORIZED';
		this.data = data;
	}
}

export default Unauthorized;
