export interface Carrera {
  nombre: String,
  id: Number,
  idfac:Number
}

export interface Alumno {
  nombre: String,
  matricula: String,
  idcarrera: Number,
  generacion: String,
  idfacultad: Number,
  plan: Number,
  status: Number
}

export interface Materia {
  nombre: String,
  clave: Number,
  idcarrera: Number,
  plan: Number
}

export interface Calificacion {
  clave: Number,
  matricula: Number,
  calificacion: Number,
  plan: Number,
  carrera: Number
}

