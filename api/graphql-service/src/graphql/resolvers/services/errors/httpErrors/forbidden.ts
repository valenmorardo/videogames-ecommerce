import { IAdditionalDataError } from '@libs/typings/additionalDataError';

class Forbidden {
	message!: string;
	status: number;
	code: string;
	data?: IAdditionalDataError;

	constructor(
		message: string,
		data?: IAdditionalDataError,
	) {
		this.message = message;
		this.status = 403;
		this.code = 'FORBIDDEN';
		this.data = data;
	}
}

export default Forbidden
