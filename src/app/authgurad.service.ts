import { Injectable } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthguradService {

  constructor() { }
   
  gettoken() {
    return !! localStorage.getItem("SeesionUser")
 
  }

}
