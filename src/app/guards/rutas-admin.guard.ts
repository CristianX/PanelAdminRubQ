import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { TokenService } from '../shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class RutasAdminGuard implements CanActivate {

  constructor( private auth: TokenService, private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.auth.isLoggedIn()) {
      // console.log("Esta logueado?");
    }
    return true;
  }
  
}
