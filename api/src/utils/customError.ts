import { IAdditionalDataError } from "../libs/typings/additionalDataError";

export class CustomError {
	message!: string;
	status!: number;
	data?: IAdditionalDataError;

	constructor(message: string, status: number, data?: IAdditionalDataError) {
		this.message = message;
		this.data = data;
		this.status = status ? status : 500;
	}
}
