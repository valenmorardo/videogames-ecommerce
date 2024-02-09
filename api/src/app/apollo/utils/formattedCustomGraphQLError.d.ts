import { IAdditionalDataError } from '../additionalDataError';

export interface IformattedCustomGraphQLError {
	message: string;
	error_status?: number;
	error_code?: string;
	additional_data?: IAdditionalDataError;
}
