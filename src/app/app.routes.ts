import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "login",
    redirectTo: "/login",
    loadComponent: () => import("./pages/login/login").then((m) => m.Login),
  },
  {
    path: "dashboard",
    redirectTo: "/dashboard",
    loadComponent: () =>
      import("./pages/dashboard/dashboard").then((m) => m.Dashboard),
  },
  {
    path: "signup",
    redirectTo: "/register",
    loadComponent: () =>
      import("./pages/dashboard/dashboard").then((m) => m.Dashboard),
  },
];
