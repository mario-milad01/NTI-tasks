import { Routes } from '@angular/router';
import { HomePage } from './home/home.component';
import { Cart } from './cart/cart.component';
import { ProfilePage } from './profile-page/profile-page';
import { LoginPage } from './login-page/login-page';
import { SignupPage } from './signup-page/signup-page';
import { ContactUs } from './contact-us/contact-us';

export const routes: Routes = [
    // {path:'',redirectTo:'home',component:HomePage,},
    {path:'home', component:HomePage},
    {path:'cart',component:Cart},
    {path:'profile',component:ProfilePage},
    {path:'login',component:LoginPage},
    {path:'signup',component:SignupPage},
    {path:'contact-us',component:ContactUs}
];
