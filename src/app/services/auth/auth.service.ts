import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

    auth0 = new auth0.WebAuth({
        clientID: environment.auth0ClientID,
        domain: environment.auth0Domain,
        responseType: 'token id_token',
        audience: environment.auth0Audience,
        redirectUri: environment.auth0RedirectUri,
        scope: 'openid'
    });

    constructor(private router: Router) {}

    login() {
        this.auth0.authorize();
    }

    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.router.navigate(['/books']);
            } else if (err) {
                this.router.navigate(['/books']);
                console.log(err);
            }
        });
    }

    private setSession(authResult): void {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    }

    logout() {
        // To log out, we just need to remove
        // the user's profile and token
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // Access Token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    }
}