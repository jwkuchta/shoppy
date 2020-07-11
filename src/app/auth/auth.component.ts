import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms"
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    loginMode = true
    isLoading = false
    error: string = null
    errorMessage: string = null

    constructor(private authSrv: AuthService, private router: Router){}
    
    onSwitchMode() {
        this.loginMode = !this.loginMode
    }

    onSubmit(form: NgForm) {
        if (!form.valid) return
        const email = form.value.email 
        const password = form.value.password

        let authObs: Observable<AuthResponseData>

        this.isLoading = true 

        if (this.loginMode) {
            authObs = this.authSrv.login(email, password)
        } else {
            authObs = this.authSrv.signup(email, password)
        }

        authObs.subscribe(resData => {
            console.log(resData)
            this.isLoading = false
            this.router.navigate(['/recipes'])
        }, errorMessage => {
            console.log(errorMessage)
            this.error = errorMessage
            this.isLoading = false
        })
        form.reset()
    }
}


