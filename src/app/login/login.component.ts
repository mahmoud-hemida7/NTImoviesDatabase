import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup=new FormGroup({
    'email':new FormControl(null, [Validators.required,Validators.email]),
    'password':new FormControl(null, [Validators.required]),
  })
  login()
  {
    this._AuthService.login(this.loginForm.value).subscribe((data)=>{
      if(data.message=='success'){
        localStorage.setItem("token",data.token)
        this._ToastrService.success("Welcome sir","Login")

        this._Router.navigateByUrl("/home")
      }
      else{
        this._ToastrService.error("Invalid E-mail or Password","Login failed")
        this.loginForm.reset()
      }
    })
  }
  goToRegister(){
    this._Router.navigateByUrl("/register")
  }

  constructor(private _AuthService:AuthService, private _Router:Router ,private _ToastrService:ToastrService ) { }

  ngOnInit(): void {
  }

}
