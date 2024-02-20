import { IAdditionalDataError } from '@libs/typings/additionalDataError';

class NotImplemented {
	message!: string;
	status: number;
	code: string;
	data?: IAdditionalDataError;

	constructor(
		message: string,
		data?: IAdditionalDataError,
	) {
		this.message = message;
		this.status = 501;
		this.code = 'NOT_IMPLEMENTED';
		this.data = data;
	}
}

export default NotImplemented
