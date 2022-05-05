import { createReducer, Action, on } from "@ngrx/store";

import { IBarState, initialBarState } from "../state/bar.state";
import * as actions from "../actions/bar.actions";
import { IRole } from "src/app/model/role";
import { IUser } from "src/app/model/user";
import * as _ from "lodash";

const _BarReducer = createReducer(
  initialBarState,
  on(actions.usersLoad, usersLoad),
  on(actions.usersLoadSuccess, usersLoadSuccess),
  on(actions.usersLoadFailure, usersLoadFailure),
  on(actions.updateUser, updateUser),
  on(actions.rolesLoad, rolesLoad),
  on(actions.rolesLoadSuccess, rolesLoadSuccess),
  on(actions.rolesLoadFailure, rolesLoadFailure),
  on(actions.updateRole, updateRole)
);

// Users
export function usersLoad(state: IBarState): IBarState {
  return { ...state };
}
export function usersLoadSuccess(
  state: IBarState,
  payload: { users: IUser[] }
): IBarState {
  // sort it by name
  let temp = _.cloneDeep(payload.users);
  temp = temp.sort((a, b) => (a.name > b.name ? 1 : -1));

  return { ...state, usersState: temp };
}
export function usersLoadFailure(state: IBarState): IBarState {
  return { ...state };
}
export function updateUser(
  state: IBarState,
  payload: { id: string; newValue: string }
): IBarState {
  const tempUser = state.usersState.map((user) =>
    user.id === payload.id
      ? {
          ...user,
          name: payload.newValue,
        }
      : user
  );
  // sort it by name
  let temp = _.cloneDeep(tempUser);
  temp = temp.sort((a, b) => (a.name > b.name ? 1 : -1));

  return { ...state, usersState: temp };
}

// Roles
export function rolesLoad(state: IBarState): IBarState {
  return { ...state };
}
export function rolesLoadSuccess(
  state: IBarState,
  payload: { roles: IRole[] }
): IBarState {
  // sort it by name
  let temp = _.cloneDeep(payload.roles);
  temp = temp.sort((a, b) => (a.name > b.name ? 1 : -1));

  return { ...state, roleState: temp };
}
export function rolesLoadFailure(state: IBarState): IBarState {
  return { ...state };
}
export function updateRole(
  state: IBarState,
  payload: { id: string; newValue: string }
): IBarState {
  const tempRole = state.roleState.map((role) =>
    role.id === payload.id
      ? {
          ...role,
          name: payload.newValue,
        }
      : role
  );
  // sort it by name
  let temp = _.cloneDeep(tempRole);
  temp = temp.sort((a, b) => (a.name > b.name ? 1 : -1));
  return { ...state, roleState: temp };
}
export function barReducer(barState: IBarState, action: Action) {
  return _BarReducer(barState, action);
}
