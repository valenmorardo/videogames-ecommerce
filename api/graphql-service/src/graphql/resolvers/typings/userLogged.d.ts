import { IUserAttributes } from "@DB/typings/userAttributes";
export interface IuserLogged {
    user: IUserAttributes,
    auth_token: string
    
}