import { IAdditionalDataError } from 'src/typings/additionalDataError';

class NotFound {
	message!: string;
	status: number;
	code: string;
	data?: IAdditionalDataError;

	constructor(message: string, data?: IAdditionalDataError) {
		this.message = message;
		this.status = 404;
		this.code = 'NOT_FOUND';
		this.data = data;
	}
}

export default NotFound;
