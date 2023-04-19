import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';
import { getClientSettings } from './auth-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private manager = new UserManager(getClientSettings());
  private user : User = null;

  constructor() {
    this.manager.getUser().then(user => {
        this.user = user;
    });
  }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
      return this.manager.signinRedirectCallback().then(user => {
          this.user = user;
      });
  }
}
