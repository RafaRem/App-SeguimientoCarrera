import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargarPdfService {
  
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  sendFile(file: File[]){
    console.log(file);
    let formu: FormData = new FormData();
    for (var i = 0; i < file.length; i++) {
      formu.append('gatos',file[i]);
    }
    return this.http.post(this.apiURL + '/upload', formu);
  }

  handleError(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
