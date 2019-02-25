import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

ajustes: Ajustes = {
  temaUrl: 'assets/css/colors/default.css',
  tema: 'default'
};

  constructor( @Inject(DOCUMENT) private _document ) {

    this.cargarAjuste();

  }

  guardarAjustes() {
    // console.log('Guardado en el localStorege');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }


  cargarAjuste() {

    if ( localStorage.getItem('ajustes') ) {
       this.ajustes = JSON.parse( localStorage.getItem('ajustes'));
       // console.log('Cargado del localStorage');
       this.aplicarTema(this.ajustes.tema);
     } else {
       // console.log('Usando valores por defecto');
       this.aplicarTema(this.ajustes.tema);
     }
  }

  aplicarTema( tema: string ) {
    const url: string = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();

  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
