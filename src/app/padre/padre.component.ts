import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
valorContador: number= 0;
mensajePadre = 'Esta es la manera de enviar mensajes desde el componente Padre al Hijo';
mensajeRecibidodesdeHijo='';
hermanoGrande?:string;
nombre?:string;

constructor(private _servicioFamiliar: ServicioFamiliarService){

}

ngOnInit(): void {
    this._servicioFamiliar.setHermanoGrande('Juan');
    this.nombre= this._servicioFamiliar.getHermanoGrande();
}

recibirMensaje($event:string){
  this.mensajeRecibidodesdeHijo =$event;
}

aumentarContador(){
  this.valorContador++;
}

decrementarContador(){
  this.valorContador--;
}

saludar(){
  this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno()|| '');
}

preguntar(){
 console.log( this._servicioFamiliar.preguntarPorHijo() );
}


}
