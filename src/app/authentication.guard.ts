import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguradService } from './authgurad.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {


  constructor(private Authguardservice: AuthguradService, private router: Router) { }
  canActivate(): boolean {
    if (!this.Authguardservice.gettoken()) {
      console.log(this.Authguardservice.gettoken())
      this.router.navigateByUrl("/login");
    }
    return this.Authguardservice.gettoken();

  }

}
