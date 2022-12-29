import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  num1:number=0;
  numero!:number;
  array:any=[]=[];
  numeroAlzar(){
    if(this.num1==0){
        this.num1=Math.ceil(Math.random()*6);
        this.numero=this.num1;
        console.log("a:num1=0 " + this.num1 + " numero se ve " +this.numero);
    }else if(this.num1!=0){
      this.num1=Math.ceil(Math.random()*6);
      if(this.num1!=this.numero){
        this.numero=this.num1;
        console.log("b:num1=" + this.num1 + " numero se ve " +this.numero);
      }else if(this.num1==this.numero){
        this.num1=Math.ceil(Math.random()*6);
        this.numero=this.num1;
        console.log("c:num1=con algo" + this.num1 + " numero se ve " +this.numero);
      }
    }else{
      console.log("ocurrio error" );
    }
  }
  
}
