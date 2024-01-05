import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  //Este es el mensaje que recibe desde el padre
@Input() recibeHijo: string = '' ;

mensaje: string='';
@Output() mensajeDesdeHijo = new EventEmitter<string>();
@Output() incrementarDesdeHijo = new EventEmitter<void>();
@Output() decrementarDesdeHijo = new EventEmitter<void>();

enviarMensaje(){
  this.mensajeDesdeHijo.emit(this.mensaje)
}

aumentarContador(){
  this.incrementarDesdeHijo.emit();
}
decrementarContador(){
  this.decrementarDesdeHijo.emit();
}

}
