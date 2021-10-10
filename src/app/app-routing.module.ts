import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { BicicletasListComponent } from './components/bicicletas-list/bicicletas-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: NavigationComponent
  },

  {
    path: 'usuarios',
    component: UsersListComponent
  },

  {
    path: 'bicicletas',
    component: BicicletasListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
