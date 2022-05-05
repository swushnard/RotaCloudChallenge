import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as barSelectors from "../selectors/bar.selector";
import * as actions from "../actions/bar.actions";

@Injectable()
export class BarFacade {
  constructor(private store: Store<any>) {}
  selectBar$ = this.store.pipe(select(barSelectors.barState));
  selectUserState$ = this.store.pipe(select(barSelectors.selectUsersState));
  selectRoleState$ = this.store.pipe(select(barSelectors.selectRoleState));

  loadUsers() {
    this.store.dispatch(actions.usersLoad());
  }
  updateUser(id: string, newValue: string) {
    this.store.dispatch(actions.updateUser({ id, newValue }));
  }
  updateRole(id: string, newValue: string) {
    this.store.dispatch(actions.updateRole({ id, newValue }));
  }
  loadRoles() {
    this.store.dispatch(actions.rolesLoad());
  }
}
