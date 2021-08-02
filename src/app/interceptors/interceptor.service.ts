import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// LOS INTERCEPTORES SE TIENEN QUE PONER EN EL app.module COMO provider PARA QUE PUEDA FUNCIONAR
// al implementar HttpInterceptor el servicio se convierte en un interceptor
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {    

    const headers = new HttpHeaders({
      'token-usuario': 'ABC548746ASD684EW24AS3D21'
    });

    // Una request manipulada ya no se puede volver a llamar
    // es por eso que antes de ser manipulada se tiene que clonar la request y trabajar con el clon

    const reqClone = req.clone({
      headers
    });

    return next.handle( reqClone ).pipe(
      catchError( this.manejarError )
    );

  }

  manejarError( error: HttpErrorResponse ) {
    console.log('Sucedió un error');
    console.log('Registrado en el log file');
    console.warn(error);

    // catchError necesita retornar un observable
    return throwError('Error personalizado');
  }

}
