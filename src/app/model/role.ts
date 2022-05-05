import { IUser } from "./user";

export interface IRole {
  id: string;
  name: string;
  colour: string;
}

export interface IRoleUser {
  id: string;
  name: string;
  colour: string;
  users: IUser[];
}
