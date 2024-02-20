import { IAdditionalDataError } from './additionalDataError';

export interface IformattedCustomGraphQLError {
	message: string;
	status?: number;
	code?: string;
	data?: IAdditionalDataError;
}
