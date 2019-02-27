import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda: string = 'leyenda';
  @Input() porcentaje: number = 25;
  @Output() cambioProgreso: EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgreso') txtProgreso: ElementRef;

  constructor() { }

  ngOnInit() {
  }


  // BtnDesactivar(event) {

  //   const selectores: any = document.getElementById({ " btn_minus, btn_plud "});

  //   if ( this.porcentaje === 100 ) {
  //     event.classList.add('disabled');
  //   }
  //   if ( this.porcentaje === 0) {
  //     event.classList.remove('disabled');
  //   }

  // }







  onChange(newValue: number) {

   // let elemHTML: any = document.getElementsByName('porcentaje')[0];

    if (newValue >= 100 ) {
      this.porcentaje = 100;
      this.txtProgreso.nativeElement.value = 100;
    }
    if ( newValue < 0 ) {
      this.porcentaje = 0;
      this.txtProgreso.nativeElement.value = 0;
      }

    this.porcentaje = newValue;
    this.txtProgreso.nativeElement.value = newValue;
    this.cambioProgreso.emit( newValue );

  }



  cambiarValor(valor) {

    if (this.porcentaje >= 100 && valor > 0  ) {
      this.porcentaje = 100;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    //this.BtnDesactivar(event);
    this.porcentaje = this.porcentaje + valor;
    this.cambioProgreso.emit( this.porcentaje );
    this.txtProgreso.nativeElement.focus();
  }

}
