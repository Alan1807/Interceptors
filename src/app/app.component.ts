import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';

  constructor( private usuariosService: UsuariosService ) {

    this.usuariosService.obtenerUsuarios()
      .subscribe( resp => {
        console.log(resp);
      }, (err) => {
        // Aquí se puede hacer cambios en el html
        // mostrar una pantalla o una alerta
        console.log('Error en el appComponent');
      });

  }  

}
