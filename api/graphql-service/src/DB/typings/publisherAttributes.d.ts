import { IGameAttributes } from './gameAttributes';
import { IUserAttributes } from './userAttributes';

export interface IPublisherAttributes {
	id: string;
	name: string;
	games_count: number;

    userId: string

	games?: IGameAttributes[]
}
