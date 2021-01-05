import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  


@Injectable({
  providedIn: 'root'
})
export class ApisService {

  REST_API = 'http://3.17.34.74:3000/api/signIn'; // SIGN IN API 

  constructor(private http: HttpClient) { }
   
  // For login API integration
  login (email, password) {
   const obj = {  
     email,
     password,  
     deviceToken:"xwdd",
     
   };  
    
  return this.http.post(`${this.REST_API}`, obj)  
     
 }  

}
