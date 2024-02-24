import { IAdditionalDataError } from 'src/typings/additionalDataError';

class InternalServerError {
	message!: string;
	status: number;
	code: string;
	data?: IAdditionalDataError;

	constructor(message: string, data?: IAdditionalDataError) {
		this.message = message;
		this.status = 500;
		this.code = 'INTERNAL_SERVER_ERROR';
		this.data = data;
	}
}

export default InternalServerError;
