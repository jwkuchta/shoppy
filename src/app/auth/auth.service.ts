import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`

@Injectable({providedIn: 'root'})
export class AuthService {
    apiKey: string
    constructor(private http: HttpClient) {
        this.apiKey = environment.FIREBASE_API_KEY
    }
   
    signup(email: string, password: string) {
        return this.http.post(`authUrl${this.apiKey}`, {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }

}