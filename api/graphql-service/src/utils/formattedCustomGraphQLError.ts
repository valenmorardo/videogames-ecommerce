import { IAdditionalDataError } from "@libs/typings/additionalDataError";

export class FormattedCustomGraphQLError {
	message!: string;
    error_code?: string;
	error_status?: number;

	additional_data?: IAdditionalDataError;

	constructor(message: string,  error_code?: string, error_status?: number, additional_data?: any) {
		this.message = message
        this.error_code = error_code
		this.error_status = error_status
		this.additional_data = additional_data
	}
}
