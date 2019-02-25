import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';





@Component({
  selector: 'app-accout-setings',
  templateUrl: './accout-setings.component.html',
  styles: []
})
export class AccoutSetingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit() {
    this.mantenerSeleccion();
  }

  cambiarColor(tema: string, ) {
    this.canbiarPaloma(event);
    this._ajustes.aplicarTema(tema);

  }

  canbiarPaloma(event) {
    const x = event.target;
    const selectores: any = document.getElementsByClassName('selector');
    for (const ref of selectores) {
        ref.classList.remove('working');
      }
    x.classList.add('working');
  }

 mantenerSeleccion() {
  const selectores: any = document.getElementsByClassName('selector');

  let tema = this._ajustes.ajustes.tema;

  for ( const ref of selectores ) {
    if ( ref.getAttribute( 'data-theme' ) === tema) {
      ref.classList.add('working');

    }
  }

 }

}
