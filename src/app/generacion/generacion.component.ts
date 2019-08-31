import { Component, OnInit } from '@angular/core';
import {AlumnoService} from '../servicio/alumno.service'
import { Subscriber, generate } from 'rxjs';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ConexionService} from '../servicio/conexion.service'
import {HttpClient} from '@angular/common/http';
import {CargarPdfService} from '../servicio/cargar-pdf.service'
import { MateriasService } from 'src/app/servicio/materias.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { async } from '@firebase/util';
import { FunctionsService } from 'src/app/servicio/functions.service';
import { Materia } from '../servicio/modelos';
import { ConsumoAPIService } from '../servicio/consumo-api.service';



@Component({
  selector: 'app-generacion',
  templateUrl: './generacion.component.html',
  styleUrls: ['./generacion.component.css']
})
export class GeneracionComponent implements OnInit {
  probando: any;
  file: any;
  materias: any =[];
  PlanE: number;
  pdfmate: any;
  firebd: any;
  ciclo: any;
  carrera: any;
  newplan: number;
  variablecar: any;
  varcar: any;
  generacion: any[] = [];
  rclave: any;
  rnombre: any;
  newplanarray: any[];
  arraymanual: any[] = [];
 
  constructor(private API: ConsumoAPIService,  private functionsService: FunctionsService, private alumnoservice: AlumnoService,private spinnerService: Ng4LoadingSpinnerService, private conect:ConexionService, private http:HttpClient, 
    private cargarpdf:CargarPdfService, private materia:MateriasService ) {
      this.functionsService.prepare(document.getElementById("load"),document.getElementById("textCharge"), document.getElementById("exito"), document.getElementById("fallo"));
          this.API.obtenerCarrera().subscribe((res:any)=>{
            this.varcar = res
            console.log(this.varcar)
          },(e)=>{
          });
        }

ngOnInit() {
}

pruebaa(){
console.log(this.probando)
}
loadcard(clave: any, nombre: any){
  this.rclave = clave;
  this.rnombre= nombre;
}

addmateria(){
  this.arraymanual[0]={
    "nombre": this.rnombre.toUpperCase(),
    "clave" : this.rclave,
    "plan": this.PlanE,
    "idcarrera" :this.variablecar,
    "ciclo": this.ciclo
  };
  this.insert(this.arraymanual)
  /*
  if (this.arraymanual.length == 0){
    this.arraymanual.push({
      "nombre": this.rnombre,
      "clave" : this.rclave,
      "plan": this.newplan,
      "idcarrera" :this.variablecar,
      "ciclo": this.ciclo
    });
  }else{
    let cambio = false;
    for (let i in this.arraymanual) {
      if(this.rclave == this.arraymanual[i].clave){
        this.arraymanual[i].nombre=this.rnombre,
        this.arraymanual[i].clave=this.rclave,
        this.arraymanual[i].plan=this.newplan,
        this.arraymanual[i].carrera=this.variablecar,
        this.arraymanual[i].ciclo=this.ciclo
        cambio = true;
      }
      }
    if (cambio == false){
      this.arraymanual.push({
        "nombre": this.rnombre,
        "clave" : this.rclave,
        "plan": this.newplan,
        "idcarrera" :this.variablecar,
        "ciclo": this.ciclo
      });
    } 
  }*/
 
  this.rnombre = "";
  this.rclave = "";
}

deletemateria(){
  for (let i in this.arraymanual) {
    if(this.rclave == this.arraymanual[i].clave){
      let ni: number =parseInt(i) ;
      this.arraymanual.splice(ni, 1);
    }
    }
}
capturarPlan(){
  this.newplan = this.PlanE;
  if(this.newplan == 0){
    this.capturar()
  }else{
    this.PlanE = this.newplan;
  }
}

capturar(){
  this.variablecar = this.carrera; //SE OBTIENE EL ID DE LA CARRERA
  this.newplanarray = null; //VACIO EL ARREGLO DEL PLANES DE ESTUDIO DE LA CARRERA
  //this.newplan = null; // PONGO EN NULL EL VALOR DEL NUEVO PLAN
  this.API.obtenerPlan(this.variablecar).subscribe((res:any)=>{ //REGRESA EL MAXIMO DEL NUMERO DEL PLAN DE ESTUDIO EXISTENTE
    if(res[0].w != null){
      this.PlanE = res[0].w + 1;
    }else{
      this.PlanE = 1;
    }
    console.log(this.PlanE)
  },(e)=>{
  });
  this.API.obtenerPlanxcar(this.variablecar).subscribe((res:any)=>{//REGRESA UN ARREGLO DE TODOS LOS PLANES
  this.newplanarray = res;
  },(e)=>{
  });
}

//obtener archivo
setFile(event:any){
  this.file = event.srcElement.files;
}

//obtener materias clave-nombre
analizar(){
  this.functionsService.cargando();  
  this.cargarpdf.sendFile(this.file).subscribe((a:any[])=>{   
    //se envia todo el texto del pdf para ser separ cada kardex de uno en uno en un arreglo
    this.prueba(a);
  },(e)=>{
    //se imprime el error en caso de existir
    console.log(e);
  });
}
async prueba(arraypdf: any[]){
  this.pdfmate = arraypdf[0];
  this.functionsService.cargando();
  await new Promise((resolve, reject) => {
    //se envia todo el texto para ser separado mediante recursividad
    this.prueba2(this.pdfmate)
    resolve();
  });
  
}

prueba2(text){
  if(text.indexOf("CORRESPONDA") != -1){
    this.functionsService.terminar(false);
    return "";
  }else{
    let newtext = text.trim();
    let cateo;
    let clave;
    let nombre;
    let semestre;
    do {
    
    cateo = newtext.indexOf("\n"); 
    clave = newtext.substring(0,newtext.indexOf(" ")).trim();
    console.log(clave);
    newtext = newtext.substring(newtext.indexOf(" "))
    newtext = newtext.trim();
    semestre = newtext.substring(0,newtext.indexOf(" "));
    console.log(semestre)
    newtext = newtext.substring(newtext.indexOf(" "))
    newtext = newtext.trim();
    nombre = newtext.substring(0,newtext.indexOf("\n"));
    if (cateo == -1 ){
      nombre = newtext.substring(0,50);
    }
    clave= clave.trim();
    nombre= nombre.trim() 
    this.generacion.push({
      "nombre": nombre,
      "clave" : clave,
      "plan": this.PlanE,
      "idcarrera" :this.variablecar,
      "ciclo": this.ciclo,
      "sem": semestre
    });
    newtext = newtext.substring(newtext.indexOf("\n")+1)
  } while (cateo != -1  );
  this.insert(this.generacion)
  }
}
insert(generacion: Materia[]){
  this.functionsService.cargando();
  this.API.crearMateria(generacion).subscribe((res:any)=>{
    if (res.status==200){
      this.functionsService.terminar(true);
    console.log("Todo salio correctamente")
    }else{
      this.functionsService.terminar(false);
      console.log("Algo salio Mal")
    }
  },(e)=>{
    console.log(e)
 }); 
}
}
