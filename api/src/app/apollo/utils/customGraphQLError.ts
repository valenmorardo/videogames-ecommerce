import { IAdditionalDataError } from "@libs/typings/additionalDataError";

export class CustomGraphQLError {
	message!: string;
	error_status?: number;
    error_code?: string;
	error_path?: (string | number)[]
	additional_data?: IAdditionalDataError;

	constructor(message: string,  error_status?: number, error_code?: string, error_path?: (string | number)[], additional_data?: any) {
		this.message = message
        this.error_code = error_code
		this.error_status = error_status
		this.error_path = error_path
		this.additional_data = additional_data
	}
}
