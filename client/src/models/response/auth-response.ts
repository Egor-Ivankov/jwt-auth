import { IUser } from "../user";

export interface AuthResponce {
    accesToken: string;
    refreshToken: string;
    user: IUser
}