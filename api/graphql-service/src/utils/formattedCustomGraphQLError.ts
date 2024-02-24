import { IAdditionalDataError } from 'src/typings/additionalDataError';

export class FormattedCustomGraphQLError {
	message!: string;
	status?: number;
	code?: string;
	data?: IAdditionalDataError;

	constructor(
		message: string,
		status?: number,
		code?: string,
		data?: IAdditionalDataError,
	) {
		this.message = message;
		this.status = status;
		this.code = code;
		this.data = data;
	}
}
