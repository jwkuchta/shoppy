import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { User } from './user.model'
// import { environment } from 'src/environments/.env';

const apiKey = 'AIzaSyBjDwUU70ZOQSh3_GnOb5aoz4fKBiG7508'
const signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
const loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

// defines the object we will receive in response to our http request
export interface AuthResponseData {
    kind?: string
    idToken?: string
    email?: string
    refreshToken?: string
    expiresIn?: number
    localId?: string
    registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthService {
    errorMessage: string = null
    user = new Subject<User>()

    constructor(private http: HttpClient) {}
   
    signup(email: string, password: string) {
        // from line 7
        return this.http.post<AuthResponseData>(signupUrl, {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(
            catchError(this.handleError), 
            tap(resData => {
                this.handleAuth(resData.email, resData.localId, resData.idToken, resData.expiresIn)
            })
        )
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>(loginUrl, {
            email: email,
            password: password,
            returnSecureToken: true
        })
        .pipe(
            catchError(this.handleError), 
            tap(resData => {
                this.handleAuth(resData.email, resData.localId, resData.idToken, resData.expiresIn)
            })
        )
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An unknown error has occured!'
        if (!error.error || !error.error.error) {
            return throwError(errorMessage)
        } 
        switch (error.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'There is already an account associated with this email'
                break
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'We could not find an account associated with that email'
                break
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is invalid'
                break
        }
        return throwError(errorMessage)
    }

    private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
        const expDate = new Date(new Date().getTime() + +expiresIn * 1000)
        const user = new User(email, userId, token, expDate)
        this.user.next(user)
    }

}

// TRIED DIFFERENT WAYS BUT COULD NOT MAKE .ENV WORK
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/.env';

// // const apiKey = 'AIzaSyBjDwUU70ZOQSh3_GnOb5aoz4fKBiG7508'
// const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIREBASE_API_KEY}`

// // defines the object we will receive in response to our http request
// interface AuthResponseData {
//     idToken: string
//     email: string
//     refreshToken: string
//     expiresIn: string
//     localId: string
//     registered: string
// }

// @Injectable({providedIn: 'root'})
// export class AuthService {
//     constructor(private http: HttpClient) {}
   
//     signup(email: string, password: string) {
//         // from line 7
//         return this.http.post<AuthResponseData>(authUrl, {
//             email: email,
//             password: password,
//             returnSecureToken: true
//         })
//     }

// }