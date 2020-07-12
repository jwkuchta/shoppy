import { Component, OnInit, ComponentFactoryResolver, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms"
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// added for the dynamic component creation
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})

export class AuthComponent {
    loginMode = true
    isLoading = false
    error: string = null
    errorMessage: string = null
    // we get access to the PlaceholderDirective and then store it in alertHost
    // @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective

    constructor(
        private authSrv: AuthService, 
        private router: Router,
        // private compFactRes: ComponentFactoryResolver
        ){}
    
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
            // added for dynamic component creation
            // this.showErrorModal(errorMessage)
            this.isLoading = false
        })
        form.reset()
    }

    onHandleModal() {
        this.error = null
    }

    // this is another approach that dynamically creates the alert component,
    // the previous way of rendering it conditionally and handling with an EventEmitter is the preferred way
    // private showErrorModal(error: string) {
    //     // dynamically create the alert component using the ComponentFactoryResolver
    //     // you now use the resolver to get access to ComponentFactory
    //     // it first creates an object that knows how to create our alert component - alertComponentFactory
    //     const alertComponentFactory = this.compFactRes.resolveComponentFactory(AlertComponent)
    //     const hostViewContainerRef = this.alertHost.viewContainerRef
    //     hostViewContainerRef.clear()
    //     // this will create a new component in that place
    //     hostViewContainerRef.createComponent(alertComponentFactory)

    // }
}


