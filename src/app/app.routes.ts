import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch:'full'},
    {path: 'login', loadComponent: ()=> import("./core/pages/login/login.component").then(c=> c.LoginComponent)}
];
