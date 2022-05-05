import { Actions, ofType, createEffect } from "@ngrx/effects";
import { IAppState } from "../state/app.state";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { map, switchMap, catchError } from "rxjs/operators";

import * as actions from "../actions/bar.actions";
import { UserService } from "src/app/services/user.service";
import { RoleService } from "src/app/services/role.service";

@Injectable()
export class barEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private roleService: RoleService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.usersLoad),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((res) => actions.usersLoadSuccess({ users: res })),
          catchError((e) => {
            return [actions.usersLoadFailure(e)];
          })
        )
      )
    )
  );

  loadRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.rolesLoad),
      switchMap(() =>
        this.roleService.getRoles().pipe(
          map((res) => actions.rolesLoadSuccess({ roles: res })),
          catchError((e) => {
            return [actions.rolesLoadFailure(e)];
          })
        )
      )
    )
  );
}
