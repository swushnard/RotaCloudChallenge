import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./components/users/users.component";
import { RolesComponent } from "./components/roles/roles.component";
import { HomeComponent } from "./components/home/home.component";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { barEffects } from "./store/effects/bar.effects";
import { appReducers } from "./store/reducers/app.reducer";
import { BarFacade } from "./store/facade/bar.facade";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, UsersComponent, RolesComponent, HomeComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    EffectsModule.forRoot([barEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [BarFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
