import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {
  private load: HTMLElement;
  private text: HTMLElement;
  private exito: HTMLElement;
  private fallo: HTMLElement;

  constructor() { }

  prepare(loadi: HTMLElement,texti: HTMLElement,exitoi: HTMLElement,falloi: HTMLElement ){
    this.load=loadi;
    this.text=texti;
    this.exito=exitoi;
    this.fallo=falloi;
  }

  cargando(texi?:string){
    if (texi == null)
      texi = "Cargando..."
    this.text.innerHTML = texi;
    this.load.style.display = "block";
  }

  async terminar(bool?:Boolean){
    this.load.style.display = "none";
    if (bool == true){
      this.exito.style.display = "block";
        setTimeout(()=>{
          this.exito.style.display = "none";
        },1000);
    } else if (bool == false){
      this.fallo.style.display = "block";
        setTimeout(()=>{
          this.fallo.style.display = "none";
        },1000);}
  }
}
