import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicio/conexion.service';
import { ConsumoAPIService } from 'src/app/servicio/consumo-api.service';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ConsultasService } from 'src/app/servicio/consultas.service';
import { FunctionsService } from 'src/app/servicio/functions.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  myForm: FormGroup;
  LineChart=[];
  [x: string]: {};
  procesados: any;
  materiarep: any = null;
  varmateria: any;
  todos: string[] =[ 'FACULTAD  DE INGENIERÍA MOCHIS']
  array:any[] = [];
  arraygen:any[] = []; 
  arraygengen:any[] = []; 
  carrera: string = "";
  mjrcarrera: string = "";
  mcarrera: string = ""; 
  datamatricula: string = "";
  varcarrera: string = "";
  varmcar : string ="";
  clavemat: string = "";
  varclavemat: string = "";
  alumnosrep : any[] =[];
  gen: string = "";
  mjrgen: string = "";
  vargen: string = "";
  mgen : string ="";
  firebd: any;
  calificaciones: any[] = []; 
  proxalum:any;
  rep: number = 0;
  apr: number = 0;
  varcar: any;
  pasaron:any;
  reprobados:any;
  promedio: any;
  activate: any;
  semestres: any[] =[];
  myControl = new FormControl();

  constructor(private API: ConsumoAPIService,private conect:ConexionService, public fb: FormBuilder, private consultar: ConsultasService, private functionsService: FunctionsService) { 
    this.functionsService.prepare(document.getElementById("load"),document.getElementById("textCharge"), document.getElementById("exito"), document.getElementById("fallo"));
    this.API.obtenerCarrera().subscribe((res:any)=>{
      this.varcar = res
    },(e)=>{
    });
    
  }

CrearGrafica(){
  let copia: any[] =[];
  copia.push("0")
  for(let item of this.semestres){
    copia.push(item)
  }
  this.LineChart = new Chart('lineChart', {
    type: 'line',
  data: {
   labels: ["sem-0","sem-1", "sem-2", "sem-3", "sem-4", "sem-5", "sem-6","sem-7","sem-8","sem-9"],
   datasets: [{
       label: 'Promedio Del Semestre',
       data: copia,
       fill:false,
       lineTension:0.2,
       borderColor:"blue",
       borderWidth: 1
   }]
  }, 
  options: {
   title:{
       text:"Estadisticas Del Alumno",
       display:true
   },
   scales: {
       yAxes: [{
           ticks: {
               beginAtZero:true
           }
       }]
   }
  }
  });
  }

  ngOnInit() { 
    this.pasaron;
    this.reprobados;
    
  }
cargarPlan(){ 
  this.API.obtenerPlangen(this.mgen, this.varcarrera).subscribe((res:any)=>{
    this.varmateria = res;
    this.varmateria = res.filter((valorActual, indiceActual, arreglo) => {
      //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
      return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
    });
  },(e)=>{
  });
}
mcapturar(){
    this.varcarrera = this.mcarrera;
    this.arraygen = [];
    this.API.obtenerGeneracion(this.varcarrera).subscribe((res:any)=>{
      let newarray: any =[];
      newarray.push(res[0])
      for (let i in res){
        let enc: number = 0;
        let noenc: number = 0;
        let cont = newarray;
        for (let j in cont){
        if(newarray[j].generacion == res[i].generacion)
        {  
          enc = 1;
          break;
        }
      }
      if (enc != 1){
          newarray.push(res[i])
          this.arraygen = newarray;
      }
      }
    },(e)=>{
    });  
    this.cargarPlan()
  }

capturar(){
    this.varcarrera = this.carrera;
    this.vargen = this.gen;
    this.varclavemat = this.clavemat;
    this.arraygengen = [];
    this.API.obtenerGeneracion(this.varcarrera).subscribe((res:any)=>{
     let newarray: any =[];
     newarray.push(res[0])
     for (let i in res){
      let enc: number = 0;
      let noenc: number = 0;
      let cont = newarray;
      for (let j in cont){
      if(newarray[j].generacion == res[i].generacion)
      {
        enc = 1;
        break;
      }
    }
    if (enc != 1){
        newarray.push(res[i])
        this.arraygengen = newarray;
    }
    }
    },(e)=>{
    });  
  }

mjrcapturar(){
  this.varcarrera = this.mjrcarrera;
  this.vargen = this.mjrgen;
  this.API.obtenerGeneracion(this.varcarrera).subscribe((res:any)=>{
    let newarray: any =[];
    newarray.push(res[0])
    for (let i in res){
     let enc: number = 0;
     let noenc: number = 0;
     let cont = newarray;
     for (let j in cont){
     if(newarray[j].generacion == res[i].generacion)
     {
       enc = 1;
       break;
     }
   }
   if (enc != 1){
       newarray.push(res[i])
       this.arraygengen = newarray;
   }
   }
   },(e)=>{
   }); 
  
}

  // obtengo los arreglos de las materias de la generacion recordatorio mever esto a un servicio
getDataGen(gen: any, carrera: any) {    
    return new Promise((res, rej,)=> {
      let copia: any[] = []; 
      this.API.obtenerMateriagen(gen, carrera).subscribe(async(res:any)=>{
       this.array = res;
       this.obtenerproedio(res, "group");
       this.separodeDumis(res,"CATIDAD DE MATERIAS APROBADAS", "CANTIDAD DE MATERIAS REPROBADAS", "Genracion");
      },(e)=>{
      });
        
    });
}
 
  // Mejor alumno De la generacion
getDataMejor(gen: any, carrera: any) { 
  this.functionsService.cargando();
    return new Promise((res, rej,)=> {
      let copia: any[] = []; 
      this.API.obtenerMateriagen(gen, carrera).subscribe(async(res:any)=>{
       this.array = res;
       this.obtenerMejor(res);
       //this.separodeDumis(res,"CATIDAD DE MATERIAS APROBADAS", "CANTIDAD DE MATERIAS REPROBADAS");
      },(e)=>{
      });
    });
}
getdata(){ 
  return new Promise((res, rej,)=> {
    this.API.obtenerAlumno(this.datamatricula).subscribe(async(res:any)=>{
     if(res.length != 0) { 
       this.obtenerSemestre(res);
       this.obtenerproedio(res, "star");
       this.separodeDumis(res,"MATERIAS APROBADAS", "MATERIAS REPROBADAS", "matricula");
      }else{
       this.functionsService.terminar(false)
      }
    },(e)=>{
    }); 
  });
}
//obtener promedio de una materia por generacion 
async promedioxmateria(){
  this.vargen = this.mgen;
  this.getDataMat(this.clavemat, this.vargen);
}

getDataMat(clave: any, gen: any) { 

  return new Promise((res, rej,)=> {
    let copia: any[] = []; 
    this.API.obtenerMateriamat(clave, gen).subscribe(async(res:any)=>{
     this.obtenerproedio(res, "group");
     this.separodeDumis(res, "ALUMNOS APROBADOS", "ALUMNOS REPROBADOS", "materia");
    },(e)=>{
    });
      
  });
}
//promedio por alumno
async promedioxalumno(){
  let varmateria: string = this.varclavemat; //variable para obtener la materia de la que se desea obtener el promedia
  let copia:any = await this.getdata(); //se obtiene el arreglo de las materias por generacion
}

limpiar(){
this.pasaron = undefined;
this.reprobados = undefined;
this.promedio = undefined;
this.clavemat = undefined;
this.datamatricula = null;
this.materiarep = null;
this.ngOnInit()
}

obtenerproedio(copia:any, tipo : any){
  this.activate = tipo;
  this.promedio = null;
  let promedio: number = 0; // variable par obtener el promedio
  for (let i in copia) { 
    promedio += copia[i].calificacion;
  }
  promedio = promedio/copia.length;
  this.promedio = promedio.toFixed(3);
}

async obtenerMejor(copia:any){
  this.activate = "mejor"
 let mejor;
  await new Promise((res, rej,)=> { 
    mejor = this.consultar.obtenerMejor(copia)
   try {
  this.promedio = mejor[0].promedio.toFixed(3);
  this.pasaron = mejor[0].pasaron;
  this.functionsService.terminar(true);
  } catch (error) {
    this.functionsService.terminar(false);
  }});
}

async separodeDumis(copia: any[], mensajev: any, mensajer: any, tipo: any){
  let resul;
  await new Promise((res, rej,)=> { 
  resul = this.consultar.separodeDumis(copia, mensajev, mensajer, tipo)
  try {
  this.pasaron = resul[0].pasaron;
  this.reprobados = resul[0].r;
  this.alumnosrep = resul[0].alumnos;
  this.matrep(resul[0].materia)
  this.functionsService.terminar(true);
  } catch (error) {
    this.functionsService.terminar(false);
  }});
}

async obtenerSemestre(copia: any[]){
  let resul;
  let s1,s2 ,s3,s4,s5,s6,s7,s8,s9: any;
await new Promise((res, rej,)=> { 
  resul = this.consultar.inicio1(copia);
  try {
  this.semestres = resul; 
  this.functionsService.terminar(true);
  } catch (error) {
    this.functionsService.terminar(false);
  }});
}
async matrep(valor: any){
  if(valor != undefined){
  await new Promise((res, rej,)=> {
    this.API.obtenerOneMateria(valor).subscribe(async(res:any)=>{
      this.materiarep = res[0].nombre
     },(e)=>{
    });    
  });}
}
//promedio general del ciclo escolar y a demas obtengo los reprobados por materia
async promedioxgeneracion(){
  this.getDataGen(this.vargen, this.varcarrera);
  }  

async mejorpromedio(){
  this.getDataMejor(this.vargen, this.varcarrera);
}  
}





