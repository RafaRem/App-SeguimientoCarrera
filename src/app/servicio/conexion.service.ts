import { Injectable } from '@angular/core';
import {firebase} from '@firebase/app';
import '@firebase/firestore';
import '@firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor() { 
      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAHi890tyZEQe9wzNG9z8VmgGdsZeVmehg",
    authDomain: "uascontrolescolar.firebaseapp.com",
    databaseURL: "https://uascontrolescolar.firebaseio.com",
    projectId: "uascontrolescolar",
    storageBucket: "uascontrolescolar.appspot.com",
    messagingSenderId: "536410604554"
  };
  firebase.initializeApp(config);  
}

getstore(){
return firebase.firestore();
}

getauth(){
  return firebase.auth();
}

}
