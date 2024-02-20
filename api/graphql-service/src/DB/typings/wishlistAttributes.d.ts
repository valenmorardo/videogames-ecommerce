import { IGameAttributes } from './gameAttributes';

export interface IWishlistAttributes {
	userId: string;

	games: IGameAttributes[];
}
