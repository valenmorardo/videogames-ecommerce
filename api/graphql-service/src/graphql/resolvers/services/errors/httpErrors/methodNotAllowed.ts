import { IAdditionalDataError } from '@libs/typings/additionalDataError';

class MethodNotAllowed {
	message!: string;
	status: number;
	code: string;
	data?: IAdditionalDataError;

	constructor(
		message: string,
		data?: IAdditionalDataError,
	) {
		this.message = message;
		this.status = 405;
		this.code = 'METHOD_NOT_ALLOWED';
		this.data = data;
	}
}

export default MethodNotAllowed
