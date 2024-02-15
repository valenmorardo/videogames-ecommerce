import { IAdditionalDataError } from '../additionalDataError';

export interface IformattedCustomGraphQLError {
	message: string;
	error_code?: string;
	error_status?: number;
	additional_data?: IAdditionalDataError;
}
