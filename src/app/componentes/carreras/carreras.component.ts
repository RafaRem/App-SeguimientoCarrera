import { Component, OnInit } from '@angular/core';
import { ConsumoAPIService } from 'src/app/servicio/consumo-api.service';
import { Carrera } from 'src/app/servicio/modelos';
import { FunctionsService } from 'src/app/servicio/functions.service';

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.component.html',
  styleUrls: ['./carreras.component.css']
})
export class CarrerasComponent implements OnInit {
  carNom: any;
  carNomn: string;
  modificar:Carrera;
  carrera: Carrera;
  exis:any = 1;
  estado: any= "";
  constructor(private API: ConsumoAPIService, private functionsService: FunctionsService ) { 
    this.functionsService.prepare(document.getElementById("load"),document.getElementById("textCharge"), document.getElementById("exito"), document.getElementById("fallo"));
    this.API.obtenerCarrera().subscribe((res:any)=>{
      this.carrera = res
    },(e)=>{
    });
  }

  ngOnInit() {
    this.carrera;
  }

crearCarrera(carrera: Carrera){
  this.functionsService.cargando();
  this.API.crearCarrera(this.carrera).subscribe((res:any)=>{
    if (res.status==200){
      this.functionsService.terminar(true);
    }else{
      this.functionsService.terminar(false);
    }
  },(e)=>{
  });
}

  Loadmodal(carrera: Carrera){
    this.carNom = carrera.nombre;
    this.modificar = carrera;
  }
  nuevo(){

    let nueva = {
      nombre: this.carNomn.toUpperCase(),
      idfac:2
    }
    
    this.API.crearCarrera(nueva).subscribe((res:any)=>{
      console.log(res)
    },(e)=>{
    });
  }
  modificarCarrera(){
    this.functionsService.cargando();
    this.modificar.nombre = this.carNom.toUpperCase();
    this.API.modificarCarrera(this.modificar).subscribe((res:any)=>{
      console.log(res)
      if(res.status == 200){
        this.functionsService.terminar(true);
      }else{
        this.functionsService.terminar(false);
      }
    },(e)=>{
    });
  }
 
  
}
