import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { _notfound_, _servererror_ } from "src/app/Shared/constants/route";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error) {
          if (error.status === 400) {
            alert("Bad request");
          }
          if (error.status === 404) {
            this.router.navigate([`/${_notfound_}/`]);
          }
          if (error.status === 401) {
            alert(`You are not authorized`);
          }
          if (error.status === 500) {
            this.router.navigate([`/${_servererror_}/`]);
          }
        }
        return throwError(error);
      })
    );
  }
}
