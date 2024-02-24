import { IAdminAttributes } from '@DB/typings/adminAttributes';

export interface IPayloadAuthToken {
	userId: string;
	isAdmin: null | IAdminAttributes;
	iat: number;
	exp: number;
}
