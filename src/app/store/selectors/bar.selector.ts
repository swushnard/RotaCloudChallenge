import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBarState } from "../state/bar.state";

export const barState = createFeatureSelector<IBarState>("bar");
export const selectUsersState = createSelector(
  barState,
  (state) => state?.usersState
);
export const selectRoleState = createSelector(
  barState,
  (state) => state?.roleState
);
