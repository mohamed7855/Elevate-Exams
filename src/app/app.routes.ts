import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'auth/login', pathMatch:'full'},
    {
        path: 'auth',
        loadComponent: ()=> import ('./core/layout/auth-layout/auth-layout.component').then((c)=> c.AuthLayoutComponent),
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', loadComponent: ()=>import ('./core/pages/login/login.component').then((c)=>c.LoginComponent)},
            {path: 'register', loadComponent: ()=> import('./core/pages/register/register.component').then((c)=>c.RegisterComponent)},
            {path: 'forgetPassword', loadComponent: ()=>import('./core/pages/forget-password/forget-password.component').then((c)=>c.ForgetPasswordComponent)},
            {path: 'verifyCode', loadComponent: ()=>import('./core/pages/verify-code/verify-code.component').then((c)=>c.VerifyCodeComponent)},
            {path: 'resetPassword', loadComponent: ()=>import('./core/pages/reset-password/reset-password.component').then((c)=>c.ResetPasswordComponent)},
        ]
        
    },
    {
        path: 'home',
        loadComponent: ()=> import('./core/layout/home-layout/home-layout.component').then((c)=>c.HomeLayoutComponent),
        children: [
            {path: '', redirectTo: 'quizes', pathMatch: 'full'},
            {path: 'quizes', loadComponent: ()=>import('./core/pages/quizes/quizes.component').then((c)=>c.QuizesComponent)},
        ] 
    },
];
