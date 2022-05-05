import { IRole } from "src/app/model/role";
import { IUser } from "src/app/model/user";



export const initialBarState: IBarState = {
  usersState: null,
  roleState: null,
};

export interface IBarState {
  usersState: IUser[];
  roleState: IRole[];
}
