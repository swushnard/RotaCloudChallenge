import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { debounceTime, takeUntil } from "rxjs/operators";
import { BarFacade } from "src/app/store/facade/bar.facade";
import * as _ from "lodash";
import { IRole } from "src/app/model/role";
import { IUser } from "src/app/model/user";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit, OnDestroy {
  public unsubscribe$ = new Subject<void>();
  public selectUsersState$: Observable<IUser[]>;
  public selectRolesState$: Observable<IRole[]>;
  public users: IUser[];
  public roles: IRole[];

  constructor(private barFacade: BarFacade) {
    this.selectUsersState$ = this.barFacade.selectUserState$;
    this.selectRolesState$ = this.barFacade.selectRoleState$;

    this.selectUsersState$
      .pipe(debounceTime(1000), takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        if (data) {
          this.users = data;
        }
      });

    this.selectRolesState$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        if (data) {
          this.roles = data;
        }
      });
  }

  ngOnInit() {}
  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  mapRole(id: string): IRole {
    const theRole = this.roles?.find((role) => role.id === id);
    return theRole;
  }

  update(user: IUser, e: string) {
    this.barFacade.updateUser(user.id, e);
  }
}
