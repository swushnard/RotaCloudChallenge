import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";
import { BarFacade } from "src/app/store/facade/bar.facade";
import * as _ from "lodash";
import { IRole, IRoleUser } from "src/app/model/role";
import { IUser } from "src/app/model/user";

@Component({
  selector: "app-roles",
  templateUrl: "./roles.component.html",
  styleUrls: ["./roles.component.css"],
})
export class RolesComponent implements OnInit, OnDestroy {
  public unsubscribe$ = new Subject<void>();
  public selectUsersState$: Observable<IUser[]>;
  public selectRolesState$: Observable<IRole[]>;
  public users: IUser[];
  public roles: IRole[];
  public roleUsers: IRoleUser[];
  constructor(private barFacade: BarFacade) {
    this.selectUsersState$ = this.barFacade.selectUserState$;
    this.selectRolesState$ = this.barFacade.selectRoleState$;
    this.selectUsersState$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        if (data) {
          this.users = data;
        }
      });

    this.selectRolesState$
      .pipe(debounceTime(1000), takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        if (data) {
          this.roles = data;
          this.mapUserRole();
        }
      });
  }
  ngOnInit() {}
  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  mapUserRole(): void {
    let tempRoles = _.cloneDeep(this.roles) as IRoleUser[];
    this.roles?.forEach((role) => {
      let tempuser = [];
      this.users?.forEach((user) => {
        if (user.roles?.includes(role.id)) {
          tempuser.push(user);
        }
      });

      tempRoles = tempRoles.map((item) =>
        item.id === role.id
          ? {
              ...item,
              users: tempuser,
            }
          : item
      );
    });
    this.roleUsers = tempRoles;
  }

  update(user: IRole, e: string) {
    this.barFacade.updateRole(user.id, e);
  }
}
