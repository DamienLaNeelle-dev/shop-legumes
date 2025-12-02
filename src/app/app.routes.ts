import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ShopComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
