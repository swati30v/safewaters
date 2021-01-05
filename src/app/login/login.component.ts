import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApisService } from '../Apis.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  user = '1';
  isCredentialsExist = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private ApisService: ApisService) { }

  ngOnInit(): void { this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  //localStorage.setItem('SeesionUser', this.user)
}
// getter for easy access to form fields
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;

  }
  this.ApisService.login(
  this.registerForm.value.email,
  this.registerForm.value.password
  )
    .subscribe((res : any) => {
      console.log( "res", res)
      if(res) { 
        if (res.data) {
          this.isCredentialsExist = true;
        } else {
         // console.log( "res", res.length )
        localStorage.setItem("SeesionUser",this.user)
        this.router.navigate(['/dashboard']);
        this.isCredentialsExist = false;
        }
      }
      
   });


}
     

}
