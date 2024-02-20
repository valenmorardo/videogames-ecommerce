export interface IUserAttributes {
	id: number;
	name: string;
	email: string;
	username: string;
	password: string;
	profilePhoto: string;
	phoneNumber: string;
	wallet: number;
	admin?: null | {adminId: number, userId: number}
}
