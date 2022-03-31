import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importando forms module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BicicletasListComponent } from './components/bicicletas-list/bicicletas-list.component';
import { BicicletaComponent } from './components/bicicleta/bicicleta.component';
import { BicicletasEliminadasComponent } from './components/bicicletas-eliminadas/bicicletas-eliminadas.component';
import { BicicletaEliminadaComponent } from './components/bicicleta-eliminada/bicicleta-eliminada.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    LoginComponent,
    UsersListComponent,
    NavbarComponent,
    BicicletasListComponent,
    BicicletaComponent,
    BicicletasEliminadasComponent,
    BicicletaEliminadaComponent,
    CreateUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
