import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AlumnoService} from '../app/servicio/alumno.service';
import { Routes, RouterModule } from '@angular/router';
import{HttpClient, HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfextractionComponent } from './componentes/pdf/pdfextraction/pdfextraction.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { ConsultasComponent } from './componentes/consultas/consultas.component';
import { GeneracionComponent } from './generacion/generacion.component';
import { CarrerasComponent } from './componentes/carreras/carreras.component';
import { MenuComponent } from './componentes/menu/menu.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NgSelectModule } from '@ng-select/ng-select';
import {Chart} from 'chart.js';
const routes: Routes= [

  {path: '', component: MenuComponent},
  {path: 'extalum', component:AlumnosComponent },
  {path: 'con', component:ConsultasComponent },
  {path: 'gen', component:GeneracionComponent },
  {path: 'carrera', component:CarrerasComponent },
  {path: '**', component: MenuComponent}
  
 
  
];

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    PdfextractionComponent,
    ConsultasComponent,
    GeneracionComponent,
    CarrerasComponent,
    MenuComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule,
    MatExpansionModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(routes),
    NgSelectModule,

  ],
 
  exports: [MatExpansionModule,
    MatInputModule,
    BrowserAnimationsModule,],
    
  providers: [AlumnoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
