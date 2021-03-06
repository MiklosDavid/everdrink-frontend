import { Injectable } from '@angular/core';
import {
  Router,
  RouterStateSnapshot,
  CanActivate,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AuthService } from '@core/services/auth.service';
import { NotificationService } from '@core/services/notification.service';
import { NullTemplateVisitor } from '@angular/compiler';

@Injectable()
export class AuthGuard implements CanActivate {
  isLoggedIn: boolean = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private ns: NotificationService
  ) {
    this.authService.isLoggedIn$.subscribe((data) => {
      this.isLoggedIn = data;
    });
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.isLoggedIn) {
      // this.router.navigate(['/']);
      this.ns.show('Hozzáférés megtagadva!');
      console.error('Access denied!');
      return this.isLoggedIn;
    }
    return this.isLoggedIn;
  }
}
