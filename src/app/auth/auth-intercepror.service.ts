import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http'
import { AuthService } from './auth.service';
import { exhaustMap, take } from 'rxjs/operators';

// we will provide it in the app module not here in root
@Injectable()

export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authServ: AuthService) {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authServ.user.pipe(
            take(1), 
            exhaustMap(user => {
                if (!user) {
                    return next.handle(req)
                } else {
                    const modifiedReq = req.clone({
                        params: new HttpParams().set('auth', user.token)
                    })
                    return next.handle(modifiedReq)
                }   
            })
        )
    }
}