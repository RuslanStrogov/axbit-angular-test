import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { ErrorDialogService } from '../services/errordialog.service';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestInterceptor implements HttpInterceptor {

  apiProtocol = `https:`;
  apiUrl = `apidata.mos.ru`;
  apiKey = environment.apiKey;

  constructor(
    // public errorDialogService: ErrorDialogService,
    // private authenticationService: AuthenticationService,
    ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let proxyReq = req.clone({
      url: `${this.apiProtocol?this.apiProtocol:window.location.protocol}//${this.apiUrl?this.apiUrl:window.location.host}${req.url}?api_key=${this.apiKey}`,
      // setHeaders: {
      //   'Access-Control-Allow-Origin': `*`,
      //   'Access-Control-Allow-Headers': '*',
      //   'Access-Control-Expose-Headers': '*',
      // }
    });

    return next.handle(proxyReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.status === 204) {
            // no content

            //TODO
            // this.errorDialogService.openSnakbar({
            //   message: `204 (${event.statusText}): ${event.url}`,
            // });
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {

        //TODO
        // this.errorDialogService.openSnakbar({
        //   message: `${error.error.code} (${error.error.reasonPhrase}): ${error.error.description}`,
        // });

        return throwError(error);
      })
    );
  }
}
