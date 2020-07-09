import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const authUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.api_key}`

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {}
    
    signup(email: string, password: string) {
        return this.http.post(authUrl, {
            email: email,
            password: password,
            returnSecureToken: true
        })
    }
}