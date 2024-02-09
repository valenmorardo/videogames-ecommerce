import { IAdditionalDataError } from "./additionalDataError";

export interface ICustomError {
    message: string,
    status?: number,
    code?: string,
    data?: IAdditionalDataError
}