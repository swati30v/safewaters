import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguradService {

  constructor() { }
   
  gettoken() {
    return !!localStorage.getItem("SeesionUser")
  }

}
