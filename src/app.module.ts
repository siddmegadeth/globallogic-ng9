import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './components/landing/landing';
import { NavbarComponent } from './components/navbar/navbar';
import { LoginComponent } from './components/login/login';

@NgModule({
  declarations: [
    LandingComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class AppModule { }