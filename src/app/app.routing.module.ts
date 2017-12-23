import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BlankComponent} from './layouts/blank/blank.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: 'dashboard',
          pathMatch: 'full'
        },
        {
          path: '',
          component: BlankComponent,
          children: [
            {
              path: 'login',
              component: LoginComponent
            },
            {
              path: 'register',
              component: RegisterComponent
            },
          ]
        }
      ]
    )
  ],
  exports: [RouterModule],
})

export class AppRoutingModule {
}
