import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _isLoggedIn = signal(false);
  isLoggedIn() {
    return this._isLoggedIn();
  }

  checkAuth(): boolean {
    const token = localStorage.getItem('token'); // customize as needed
    return !!token;
  }

  login(token: string) {
    localStorage.setItem('token', token);
    this._isLoggedIn.set(true);
  }

  logout() {
    localStorage.removeItem('token');
    this._isLoggedIn.set(false);
  }
}
