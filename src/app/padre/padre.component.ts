import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
valorContador: number= 0;
mensajePadre = 'Esta es la manera de enviar mensajes desde el componente Padre al Hijo';
mensajeRecibidodesdeHijo='';

recibirMensaje($event:string){
  this.mensajeRecibidodesdeHijo =$event;
}

aumentarContador(){
  this.valorContador++;
}

decrementarContador(){
  this.valorContador--;
}



}
