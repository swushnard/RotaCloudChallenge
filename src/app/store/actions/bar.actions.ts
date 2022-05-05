import { createAction, props } from "@ngrx/store";
import { IRole } from "src/app/model/role";
import { IUser } from "src/app/model/user";

// Users
export const usersLoad = createAction("[User] Load");
export const usersLoadSuccess = createAction(
  "[User] Load Success",
  props<{ users: IUser[] }>()
);
export const usersLoadFailure = createAction(
  "[User] Load Failed",
  props<Error>()
);

export const updateUser = createAction(
  "[User] Update",
  props<{ id: string; newValue: string }>()
);

export const updateRole = createAction(
  "[Role] Update",
  props<{ id: string; newValue: string }>()
);

// Roles
export const rolesLoad = createAction("[Roles] Load");
export const rolesLoadSuccess = createAction(
  "[Roles] Load Success",
  props<{ roles: IRole[] }>()
);
export const rolesLoadFailure = createAction(
  "[Roles] Load Failed",
  props<Error>()
);
