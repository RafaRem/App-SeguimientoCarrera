import { Component, OnInit } from '@angular/core';
import {AlumnoService} from '../../servicio/alumno.service';
import { Subscriber } from 'rxjs';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ConexionService} from '../../servicio/conexion.service'
import {HttpClient} from '@angular/common/http';
import {CargarPdfService} from '../../servicio/cargar-pdf.service'
import { MateriasService } from 'src/app/servicio/materias.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { async } from '@firebase/util';
import { FunctionsService } from 'src/app/servicio/functions.service';
import { Alumno } from 'src/app/servicio/modelos';
import { ConsumoAPIService } from 'src/app/servicio/consumo-api.service';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']

})
export class AlumnosComponent implements OnInit {
  firebd: any;
  PlanE: any;
  varplane : string;
  activador: string= "";
  alumno: Alumno;
  materias: any = [];
  maskardex:any[] = []; 
  estudiante: any[] = [];
  sem: string;
  datos: any [] = [];
  mat: any [] = [];
  mate: any;
  file: File[];
  pdfmate: any;
 varcar: any[];
 newplan: any[];
 cantalum: any;
 lic:number;

constructor(private API: ConsumoAPIService,private functionsService: FunctionsService, private alumnoservice: AlumnoService,private spinnerService: Ng4LoadingSpinnerService, private conect:ConexionService, private http:HttpClient, 
private cargarpdf:CargarPdfService, private materia:MateriasService ) {
      this.functionsService.prepare(document.getElementById("load"),document.getElementById("textCharge"), document.getElementById("exito"), document.getElementById("fallo"));
      this.API.obtenerCarrera().subscribe((res:any)=>{
        this.varcar = res
      },(e)=>{
      });
}

ngOnInit() {
       
}


capturar(){
  this.newplan = undefined;
  this.API.obtenerPlanxcar(this.lic).subscribe((res:any)=>{
    this.newplan = res;
  },(e)=>{
  });
 
}
capturarPlan(){
  this.API.obtenerplanpdf(this.PlanE, this.lic).subscribe((res:any)=>{
    console.log(res)
    this.materias = res;
  },(e)=>{
  });
}
 
cargapdf(event){
     //Carga el archivo al servidor para ser analisado
   this.functionsService.cargando();
   if(event.target.files && event.target.files[0]){
     const foto = event.target.files[0];
     const formdata = new FormData();
     formdata.append('foto', foto);
     this.http.post('http://localhost:3000/uploadpdf', formdata)
     .subscribe(res=> console.log("carga exitosa"));
   }//imprime un error en caso de existir
   else{console.log("error")}
}

//inserta en la base de datos firebase la informacion del alumno
async insert(){
  /*el arreglo estudiate contiene arreglos de la informacion de cada alumno por karde del pdf*/
  this.API.crearAlumno(this.estudiante).subscribe((res:any)=>{
  if (res.status==200){
    console.log(res)
  }else{
    console.log(res)
  }
  },(e)=>{
    console.log(e)
  }); 
}

//se toma el pdf
setFile(event:any){
  this.file = event.srcElement.files;
  this.maskardex = []
  this.estudiante = []

}
  
//
procesarpdf(){
  this.functionsService.cargando();  
  this.cargarpdf.sendFile(this.file).subscribe((a:any[])=>{     
    //se envia todo el texto del pdf para ser separ cada kardex de uno en uno en un arreglo
    this.separar(a);
  },(e)=>{
    //se imprime el error en caso de existir
    this.functionsService.terminar(false);
  });
}

async separar(arraypdf: any[]){
  this.pdfmate = arraypdf[0];
  for (let i = 0; i < arraypdf.length; i++) {  
  await new Promise((resolve, reject) => {
    //se envia todo el texto para ser separado mediante recursividad
    this.cardex(arraypdf[i])
    resolve();
  });
  }
  this.functionsService.terminar(true); 
}

//Seperar el cardex multiple en uno
cardex(text){
  
  if (text.indexOf("ENCARGADO(A)") != -1) {
    this.maskardex.push(text.substring(0,text.indexOf("ENCARGADO(A)") + 31));
    let newtext = text.substring(text.indexOf("ENCARGADO(A)") + 31);
    this.cardex(newtext)
    }else{
      for (let i = 0; i < this.maskardex.length; i++) {  
        //se envia cada kardex para extrar su informacion
        this.extraerdatospdf(this.maskardex[i])
    }
   }
}

async extraerdatospdf(text) {
  /*se analiza cada cardex para obtener la informacion necesaria de cada alumno
  */
  var newtext = text.substring(text.search("-") + 1);
  //Facultad
  var facultad = newtext.substring(0,newtext.search(","));
  var newtext = newtext.substring(newtext.search(",") + 8);
  //Universidad
  var UNI = newtext.substring(0,newtext.search(","));
  var newtext = newtext.substring(newtext.search("C.") + 3);
  //Alumno
  
  var Alumno = newtext.substring(0,(newtext.search("con")-1));
  var newtext = newtext.substring(newtext.search("cuenta:")+8);
  //Cunta
  var cuenta = newtext.substring(0,newtext.search(";"));
  cuenta = cuenta.trim()
  var newtext = newtext.substring(newtext.search("carrera")+8);
  //Carrera
  var carrera = newtext.substring(0,newtext.search("y")-1);
  //eleccion del ciclo escolar
  var newtext = newtext.substring(newtext.search("GENERACIÓN")-13);
  var ciclo = newtext.substring(1,12);
  ciclo =ciclo.replace("\n"," ");
  
  //se obtienen las materias dependiendo del plan de estudio
  
  /*await new Promise((resolve, reject) => {
    this.materias = this.materia.getmatri();
    console.log(this.materias)
        resolve();
  
  });*/
  //correccion del texto en caso de espacios a los extremos
  facultad =facultad.replace("\n"," ");
  Alumno= Alumno.trim();
  carrera =carrera.replace("\n"," ");
  carrera =carrera.replace("  "," ");
  carrera = carrera.trim()
  newtext = text.substring(text.search("-") + 1);
  this.datos = [];
  //Analisis de la calificación por cada materia
   
  for (let i = 0; i < this.materias.length; i++) { 
    this.mate = this.materias[i].clave//.clave;
  
    if (newtext.search(this.mate+" ") == -1){
     
    }else{
      var buscarli = newtext.substring(newtext.search(this.mate));
      var cal = buscarli.substring(41,43);
      //var newtext = newtext.substring("\n");
      
      cal  =cal.replace( " "," ");
      this.datos.push({ 
        "clave"    : this.mate,
        "nombre"  : this.materias[i].nombre,//.nombre,
        "cal"    : cal, 
        "matricula": cuenta
    });
    }
  }

  //cargo datos al arreglo de estudiante
  this.estudiante.push({
    "nombre": Alumno,
    "generacion" : ciclo,
    "matricula" : cuenta,
    "plan": this.PlanE,
    "idcarrera" :this.lic,
    "idfacultad" : 2,
    "status":1,
    "materias": this.datos
  });
  console.log(this.estudiante);
  this.cantalum = "Alumnos Capturados: "+this.estudiante.length;
  //activo el boton para registrar la informacion
  this.activador = "activar "
}

}
