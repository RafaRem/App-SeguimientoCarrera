import { Injectable } from '@angular/core';
import { ConsumoAPIService } from './consumo-api.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  pasaron: any;
  promedio: any;
  alumnosrep : any[] =[];
  claverep : any [] =[];
  retornar: any [] = [];
  completo: any [] = [];
  reprobados: any;
  index: number = 0;
  cont: number = 0;
  valor: any;
  ss: any[] = [];
  constructor(private API: ConsumoAPIService) { }

  obtenerMejor(copia:any){
    this.retornar = [];
    console.log(copia)
    let chingon: any;
    let promedio = 0;
    let mejorp = 0;
    let enc = 0;
    let entro = 0;
    let mejorm: any;
    let respaldo: any;
    chingon = copia[0].nombre;
    for (let i  of copia) { 
    let matricula = i.nombre;
    if(matricula == chingon){
        promedio += i.calificacion;
        chingon = matricula;
        enc += 1;
    }else if(matricula != chingon){
      entro += 1;
      if(promedio > mejorp){
        mejorm = chingon;
        mejorp = promedio
        if(entro == 1){
          respaldo = enc; 
        }     
        enc=1}
        promedio = i.calificacion;
        chingon = matricula;
    } 
    }
    if(entro == 0){
    mejorm = chingon;
    mejorp = promedio;
    }
    console.log(respaldo)
    this.promedio = mejorp/respaldo 
    //this.semestres(copia, mejorm);
    this.pasaron = "MEJOR ESTUDIANTE: "+ mejorm;
    this.retornar.push({ 
      "promedio" : this.promedio,
      "pasaron"  : this.pasaron});

      return this.retornar;
  }
  
  semestres(copia: any, alumno: any){
    let misMaterias: any[] = []
    for (let i  of copia) {
      if(i.nombre == alumno){
        misMaterias.push({ 
          "clave" : i.clave,
          "calificacion"  : i.calificacion});
      }
    }
      let text = misMaterias[0].clave;
      text = text.substring(0,1)
      if (text == 0){
        this.inico0(misMaterias)
      }else if(text == 1){
        this.inicio1(misMaterias)
      }
  }
  
  inico0(misMaterias: any){
    let s1: any,s2: any,s3: any,s4: any,s5: any,s6: any,s7: any,s8: any,s9: any;
    let c1: number = 0,c2: number = 0,c3: number = 0,c4: number = 0,c5: number = 0,c6: number = 0,c7: number = 0,
    c8: number = 0,c9: number = 0;
    for (let res of misMaterias){
      let text = res.clave;
      text = text.substring(0,1)
      if (text == 0){
        console.log(res.calificacion);
        c1++;
        s1 += res.calificacion
      }else if(text == 1){
        c2++;
        s2 += res.calificacion
      }else if(text == 2){
        c3++;
        s3 += res.calificacion
      }else if(text == 3){
        c4++;
        s4 += res.calificacion
      }else if(text == 4){
        c5++;
        s5 += res.calificacion
      }else if(text == 5){
        c6++;
        s6 += res.calificacion
      }else if(text == 6){
        c7++;
        s7 += res.calificacion
      }else if(text == 7){
        c8++;
        s8 += res.calificacion
      }else if(text == 8){
        c9++;
        s9 += res.calificacion
      }
    }
    console.log("promedio semestre 1: "+s1/c1)
  }
  inicio1(misMaterias: any){
    let s1: any[] = [],s2: any[] = [],s3: any[] = [],s4: any[] = [],s5: any[] = [],s6: any[] = [],s7: any[] = [],s8: any[] = [],s9: any[] = [];
    let c1: number = 0,c2: number = 0,c3: number = 0,c4: number = 0,c5: number = 0,c6: number = 0,c7: number = 0,
    c8: number = 0,c9: number = 0;
    for (let res of misMaterias){
     
      let sem = res.sem;
      if (sem == 1){
        s1.push(res.calificacion)
      }else if(sem == 2){
        s2.push(res.calificacion)
      }else if(sem == 3){
        s3.push(res.calificacion)
      }else if(sem == 4){
        s4.push(res.calificacion)
      }else if(sem == 5){
        s5.push(res.calificacion)
      }else if(sem == 6){
        s6.push(res.calificacion)
      }else if(sem == 7){
        s7.push(res.calificacion)
      }else if(sem == 8){
        s8.push(res.calificacion)
      }else if(sem == 9){
        s9.push(res.calificacion)
      }
    }
    this.ajustar(s1);
    this.ajustar(s2);
    this.ajustar(s3);
    this.ajustar(s4);
    this.ajustar(s5);
    this.ajustar(s6);
    this.ajustar(s7);
    this.ajustar(s8);
    this.ajustar(s9);
    return this.ss;
  }

  ajustar(copia: any[]){
    let prom: any = null; 
    for(let rest of copia){
       prom += rest
    }

    this.ss.push( (prom / copia.length).toFixed(3))
  }




  agregar(s1:any){
   
   
  }



  separodeDumis(copia: any[], mensajev: any, mensajer: any, tipo : any){
    this.alumnosrep = [];
    this.claverep = [];
    this.retornar = [];
    this.pasaron = null;
    this.reprobados = null;
    let menzos: number = 0;
    let dostres: number =0;
  
    console.log(copia)
    for (let i in copia) { 
      let enc: number = 0;
      if(copia[i].calificacion>= 6 ){
        dostres += 1;
      }else{
        menzos += 1;
        this.alumnosrep.push(copia[i].nombre);
        this.claverep.push(copia[i].clave);
      }
    } 
    let alumnos: any[]= [];
    alumnos = this.alumnosrep.filter((valorActual, indiceActual, arreglo) => {
      //Podríamos omitir el return y hacerlo en una línea, pero se vería menos legible
      return arreglo.findIndex(valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)) === indiceActual
    });
    for (let res of this.claverep){
      this.cont = 0;
      let ind = this.claverep.indexOf(res)
      while (ind != -1) {
        this.cont++;
        ind = this.claverep.indexOf(res, ind + 1);
      }
      if(this.index<this.cont && this.cont > 0 ){
        this.valor = res;
        this.index = this.cont
      }
    }
    console.log(this.cont+" "+this.valor);    
    this.pasaron = mensajev+ " "+ dostres;
    this.reprobados = mensajer+ " "+ menzos;
    this.retornar.push({ 
      "materia" : this.valor,
      "r"    : this.reprobados,
      "pasaron"  : this.pasaron,
      "alumnos" : alumnos
    });

    return this.retornar;
  }
  
}
