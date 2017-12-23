import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app.routing.module';
import {SharedModule} from './common/shared.module';
import {BlankComponent} from './layouts/blank/blank.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './layouts/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlankComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
