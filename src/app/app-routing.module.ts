import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { BicicletasListComponent } from './components/bicicletas-list/bicicletas-list.component';
import { BicicletaComponent } from './components/bicicleta/bicicleta.component';
import { BicicletasEliminadasComponent } from './components/bicicletas-eliminadas/bicicletas-eliminadas.component';
import { BicicletaEliminadaComponent } from './components/bicicleta-eliminada/bicicleta-eliminada.component';
import {CreateUsersComponent} from './components/create-users/create-users.component'
import { RutasAdminGuard } from './guards/rutas-admin.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    // Ruta por defecto
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    component: NavigationComponent,
    canActivate: [RutasAdminGuard]
  },
  
  {
    path: 'usuarios',
    component: UsersListComponent,
    canActivate: [RutasAdminGuard]
  },
  
  {
    path: 'bicicletas',
    component: BicicletasListComponent,
    canActivate: [RutasAdminGuard]
  },
  
  {
    path: 'bicicleta/:id',
    component: BicicletaComponent,
    canActivate: [RutasAdminGuard]
  },
  
  {
    path: 'bicicletasEliminadas',
    component: BicicletasEliminadasComponent,
    canActivate: [RutasAdminGuard]
  },
  
  {
    path: 'create',
    component: CreateUsersComponent,
    canActivate: [RutasAdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
