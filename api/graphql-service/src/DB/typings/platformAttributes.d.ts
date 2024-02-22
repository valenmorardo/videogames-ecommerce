import { IGameAttributes } from "./gameAttributes";

export interface IPlatformAttributes {
    id: number,
    name: string,

    games?: IGameAttributes[]
}