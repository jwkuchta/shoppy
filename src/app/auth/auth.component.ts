import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms"
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs'

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit {
    loginMode = true
    isLoading = false
    error: string = null
    errorMessage: string = null

    constructor(private authSrv: AuthService){}

    ngOnInit() {
        console.log(process.env.PAPA)
    }
    
    onSwitchMode() {
        this.loginMode = !this.loginMode
    }

    onSubmit(form: NgForm) {
        console.log(process.env.PAPA)
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
        
        authObs.subscribe(respData => {
            console.log(respData)
            this.isLoading = false
        }, error => {
            this.errorMessage = error.error.error.message
            this.error = `An error has occured - ${this.errorMessage}`
            this.isLoading = false
        })
        form.reset()
    }
}


