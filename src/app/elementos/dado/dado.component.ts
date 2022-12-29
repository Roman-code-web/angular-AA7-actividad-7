import { CssSelector } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent {
  num1:number=0;
  numero:number=0;
  rotar="";
  escalar="";
  girar(){
    this.rotar="rotar";
    this.escalar="escalar";
    setTimeout(() => {
      this.rotar="";
      this.escalar="";
    }, 1000);
    this.numeroAlzar();
  }
  numeroAlzar(){
    if(this.num1==0){
        this.num1=Math.ceil(Math.random()*6);
        this.numero=this.num1;
    }else if(this.num1!=0){
      this.num1=Math.ceil(Math.random()*6);
      if(this.num1!=this.numero){
        this.numero=this.num1;
      }else if(this.num1==this.numero){
        this.num1=Math.ceil(Math.random()*6);
        this.numero=this.num1;
      }
    }else{
      console.log("ocurrio error" );
    }
    
  }
 
}
