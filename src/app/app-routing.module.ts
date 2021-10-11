import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PublicComponent } from './components/public/public.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { StoreComponent } from './components/store/store.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'store', component: StoreComponent},
  {path: 'public', component: PublicComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: '', redirectTo: '/public', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
