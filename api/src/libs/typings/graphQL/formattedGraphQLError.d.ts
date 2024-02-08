import { IAdditionalDataError } from '../additionalDataError';

export interface IformattedGraphQLError {
	message: string;
	error_code: string;
	error_status: number;
	error_path: (string | number)[];
	additional_data?: IAdditionalDataError;
}
