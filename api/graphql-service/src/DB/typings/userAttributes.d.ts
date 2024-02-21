import { IAdminAttributes } from './adminAttributes';
import { IPublisherAttributes } from './publisherAttributes';
import { IGameAttributes } from './gameAttributes';
import { IWishlistAttributes } from './wishlistAttributes';

export interface IUserAttributes {
	id: string;
	name: string;
	email: string;
	username: string;
	password: string;
	profilePhoto: string;
	phoneNumber: string;
	wallet: number;

	wishlist?: IWishlistAttributes[];

	library?: IGameAttributes[];
	publisher?: IPublisherAttributes;
	admin?: IAdminAttributes;
}
