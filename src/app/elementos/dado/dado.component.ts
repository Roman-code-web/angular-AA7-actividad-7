import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  num1!:number;
  numero!:number;
  array:any=[]=[];
  numeroAlzar(){
    this.numero=Math.ceil(Math.random()*6) ;
    
  }
  /*evitarRepetir(numero:number){

    this.array.push(numero);
    console.log(this.array)
  }
  */
}
