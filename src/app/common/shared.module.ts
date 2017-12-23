import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpAuthInterceptor} from './utils/http-auth-interceptor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [],
  exports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true
    },
  ]
})

export class SharedModule {
}
