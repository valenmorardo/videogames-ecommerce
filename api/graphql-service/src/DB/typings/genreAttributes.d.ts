import { IGameAttributes } from "./gameAttributes";

export interface IGenresAttributes {
    id: string,
    name: string,

    games: IGameAttributes[]
}