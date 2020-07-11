import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators'

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(private authServ: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): 
    boolean | Promise<boolean> | Observable<boolean | UrlTree> {
        // returns a user object not a boolean, map makes it into a boolean
        return this.authServ.user.pipe(
            take(1), // so we don't have an ongoing Subscription
            map(user => {
            const isAuth = !!user
            if (isAuth) return true
            else return this.router.createUrlTree(['/auth'])
        })
        ) 
    }

}