import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
// import { environment } from 'src/environments/.env';

const apiKey = 'AIzaSyBjDwUU70ZOQSh3_GnOb5aoz4fKBiG7508'
const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`

// defines the object we will receive in response to our http request
interface AuthResponseData {
    idToken: string
    email: string
    refreshToken: string
    expiresIn: string
    localId: string
    registered: string
}

@Injectable({providedIn: 'root'})
export class AuthService {
    errorMessage: string = null
    constructor(private http: HttpClient) {}
   
    signup(email: string, password: string) {
        // from line 7
        return this.http.post<AuthResponseData>(authUrl, {
            email: email,
            password: password,
            returnSecureToken: true
        }).pipe(catchError(error => this.errorMessage = error))
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