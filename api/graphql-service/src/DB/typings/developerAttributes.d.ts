import { IGameAttributes } from './gameAttributes';
import { IUserAttributes } from './userAttributes';

export interface IDeveloperAttributes {
	id: number;
	name: string;
	games_count: number;

    userId: number

	games: IGameAttributes[]
}
