import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing';
import { NavbarComponent } from './components/navbar/navbar';
import { LoginComponent } from './components/login/login';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }