import { IAdditionalDataError } from "@libs/typings/additionalDataError";
export class CustomError {
	message!: string;
	status?: number;
	code?: string;
	data?: IAdditionalDataError;

	constructor(message: string, status?: number, code?: string, data?: IAdditionalDataError) {
		this.message = message;
		this.status = status ? status : 500;
		this.code = code ? code : "INTERNAL SERVER ERROR";
		this.data = data ? data : undefined;
	}
}
