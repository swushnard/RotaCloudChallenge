import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { RolesComponent } from './components/roles/roles.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'roles', component: RolesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
