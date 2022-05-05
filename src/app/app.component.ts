import { Component, OnInit } from "@angular/core";
import { BarFacade } from "./store/facade/bar.facade";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "interview-test";

  constructor(private barFacade: BarFacade) {}
  ngOnInit(): void {
    this.barFacade.loadUsers();
    this.barFacade.loadRoles();
  }
}
