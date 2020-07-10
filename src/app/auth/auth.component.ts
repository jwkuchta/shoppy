import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms"
import { AuthService } from './auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    loginMode = true
    isLoading = false
    error: string = null
    errorMessage: string = null

    constructor(private authSrv: AuthService){}
    
    onSwitchMode() {
        this.loginMode = !this.loginMode
    }

    onSubmit(form: NgForm) {
        if (!form.valid) return
        const email = form.value.email 
        const password = form.value.password

        this.isLoading = true 

        if (this.loginMode) {
            // nothing here yet
        } else {
            this.authSrv.signup(email, password).subscribe(resData => {
                console.log(resData)
                this.isLoading = false
            }, error => {
                this.errorMessage = error.error.error.message
                this.error = `An error has occured - ${this.errorMessage}`
                this.isLoading = false
            })
        }
        form.reset()
    }
}


