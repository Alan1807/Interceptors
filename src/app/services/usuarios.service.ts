import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  obtenerUsuarios() {

    let params = new HttpParams().append('page', '1');
    params = params.append('nombre', 'Alan Miranda');

    // const headers = new HttpHeaders({
    //   'token-usuario': 'ABC548746ASD684EW24AS3D21'
    // });

    return this.http.get('https://reqres234234.in/api/user', {
      params
      // headers
    }).pipe(
      map( resp => resp['data'] ),

      //////// SE HIZO EL CATCH EN EL INTERCEPTOR
      // catchError( this.manejarError )
      // // catchError( err => {

      // //   console.log('Sucedió un error');
      // //   console.log('Registrado en el log file');
      // //   console.warn(err);

      // //   // catchError necesita retornar un observable
      // //   return throwError('Error personalizado');

      // // })
    )

  }

  // manejarError( error: HttpErrorResponse ) {
  //   console.log('Sucedió un error');
  //   console.log('Registrado en el log file');
  //   console.warn(error);

  //   // catchError necesita retornar un observable
  //   return throwError('Error personalizado');
  // }
  
}
