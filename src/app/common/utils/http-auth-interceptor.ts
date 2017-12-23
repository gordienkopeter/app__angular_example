import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class HttpAuthInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {
        authorization: 'Bearer ',
        'content-type': 'application/json'
      }
    });

    return next.handle(authReq)
      .catch((error) => Observable.throw(error)) as any;
  }
}
