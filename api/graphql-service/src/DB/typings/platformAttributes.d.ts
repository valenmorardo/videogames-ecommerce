import { IGameAttributes } from "./gameAttributes";

export interface IPlatformAttributes {
    id: string,
    name: string,

    games: IGameAttributes[]
}