import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { IRole } from "../model/role";

@Injectable({
  providedIn: "root",
})
export class RoleService {
  baseUrl = "";

  constructor(private _http: HttpClient) {
    this.baseUrl = `https://custom.rotacloud.com/angular-challenge/roles.json`;
  }

  getRoles(): Observable<IRole[]> {
    return this._http.get(this.baseUrl).pipe(
      map((res) => {
        const roles = (res as IRole[]) || [];
        return roles;
      })
    );
  }
}
