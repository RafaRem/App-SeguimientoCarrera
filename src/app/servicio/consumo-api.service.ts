import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrera, Alumno, Materia } from './modelos';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class ConsumoAPIService {

  private url = 'http://localhost/api/?u='

  constructor(private client: HttpClient) { }

  
  obtenerMateria(plan: any, carrera: any) {
    return this.client.get(this.url+"selectMateria&carrera="+carrera+"&plan="+plan);
  }
  obtenerplanpdf(plan: any, carrera: any) {
    console.log(plan+" "+carrera )
    return this.client.get("http://localhost/api/?u=selectPlanpdf&carrera="+carrera+"&plan="+plan);
  }
  obtenerMateriagen(gen: any, carrera: any) {
    console.log(gen)
    return this.client.get("http://localhost/api/?u=selectMateriaGen&generacion="+gen+"&carrera="+carrera);
  }
  obtenerPlangen(gen: any, carrera: any) {
    console.log(gen)
    return this.client.get("http://localhost/api/?u=selectPlanCargar&generacion="+gen+"&carrera="+carrera);
  }
  obtenerMateriamat(clave: any, generacion: any) {
    
    return this.client.get("http://localhost/api/?u=selectMateriaMat&materia="+clave+"&generacion="+generacion);
  }

  obtenerOneMateria(clave: any) {
    
    return this.client.get("http://localhost/api/?u=selectOneMateria&materia="+clave);
  }

  crearAlumno(alumno : Alumno[]){
    return this.client.post("http://localhost/api/?u=insertAlumno", alumno);
  }

  
  crearMateria(materia : Materia[]){
    return this.client.post("http://localhost/api/?u=insertMateria", materia);
  }

  crearCarrera(carrera : {}){
    return this.client.post(this.url+"insertCarrera", carrera);
  }

  obtenerAlumno(matricula: any){
    return this.client.get(this.url+"selectAlumno&matricula="+matricula);
  }
  
  obtenerCarrera(){
    return this.client.get(this.url+"selectCarrera");
  }

  obtenerGeneracion(carrera: any){
    return this.client.get(this.url+"selectGeneracion&carrera="+carrera);
  }

  obtenerPlan(carrera:any){
    return this.client.get(this.url+"selectPlan&carrera="+carrera);
  }
  obtenerPlanxcar(carrera:any){
    return this.client.get(this.url+"selectPlanxcar&carrera="+carrera);
  }

  modificarCarrera(carrera : Carrera){
    return this.client.post("http://localhost/api/?u=updateCarrera", carrera);
  }
}
