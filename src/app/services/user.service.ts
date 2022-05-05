import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { IUser } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class UserService {
  baseUrl = "";

  constructor(private _http: HttpClient) {
    this.baseUrl = `https://custom.rotacloud.com/angular-challenge/users.json`;
  }

  getUsers(): Observable<IUser[]> {
    return this._http.get(this.baseUrl).pipe(
      map((res) => {
        const users = (res as IUser[]) || [];
        return users;
      })
    );
  }
}
