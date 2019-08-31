import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import {alumno} from 'src/modelos/modelalumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  domain: string = "http://localhost:3000"; 
  constructor(public http: HttpClient) { }

  getalumno(){
  console.log(`${this.domain}/pdf`);
   return this.http.get<alumno>(`${this.domain}/pdf`).pipe(
    map(data => {
      var dat = data.text;
      return dat;
    })
  );
  }

 
}
