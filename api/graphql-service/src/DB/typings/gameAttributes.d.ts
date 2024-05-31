import { IGenresAttributes } from './genreAttributes';
import { IPlatformAttributes } from './platformAttributes';
import { IUserAttributes } from './userAttributes';
import { IWishlistAttributes } from './wishlistAttributes';

export interface IGameAttributes {
	id: string;
	name: string;
	description: string;
	price: number;
	released: string;
	alternative_names: string[];
	background_image: string;
	screenshots: string[];

	publisherId: string;

	platforms?: IPlatformAttributes[];
	genres?: IGenresAttributes[];

	users?: IUserAttributes[];
	wishlists?: IWishlistAttributes[];
}
