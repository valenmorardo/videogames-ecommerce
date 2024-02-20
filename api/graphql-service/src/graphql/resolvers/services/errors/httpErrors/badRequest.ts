import { IAdditionalDataError } from '@libs/typings/additionalDataError';

class BadRequest {
	message!: string;
	status: number;
	code: string;
	data?: IAdditionalDataError;

	constructor(
		message: string,
		data?: IAdditionalDataError,
	) {
		this.message = message;
		this.status = 400;
		this.code = 'BAD_REQUEST';
		this.data = data;
	}
}

export default BadRequest
