import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms"
import { env } from 'process';
import { environment } from 'src/environments/.env';


const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent implements OnInit {
    loginMode = true
    // apiKey: string

    ngOnInit() {
        console.log(environment.FIREBASE_API_KEY)
    }

    onSwitchMode() {
        this.loginMode = !this.loginMode
    }

    onSubmit(form: NgForm) {
        console.log(form.value)
        form.reset()
    }
}


