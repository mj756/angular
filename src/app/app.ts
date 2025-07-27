import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth';
import { Loader } from "./layouts/loader/loader";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Loader],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('angular-demo');
  private authService = inject(AuthService);
  private router = inject(Router);
  constructor() {
    const isLoggedIn = this.authService.isLoggedIn();
    const currentUrl = this.router.url;
    if (currentUrl === '/' || currentUrl === '/login' || currentUrl === '/dashboard') {
      this.router.navigateByUrl(isLoggedIn ? '/dashboard' : '/login');
    }
  }
}
