import { IGameAttributes } from "./gameAttributes";

export interface IGenresAttributes {
    id: number,
    name: string,

    games?: IGameAttributes[]
}