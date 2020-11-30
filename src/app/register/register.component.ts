import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup = new FormGroup({
    'first_name':new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
    'last_name':new FormControl(null, [Validators.required,Validators.maxLength(10),Validators.minLength(4)]),
    'email':new FormControl(null, [Validators.required,Validators.email]),
    'password':new FormControl(null, [Validators.required,Validators.pattern(/[a-z]|[A-Z]/)]),
  })
  register()
  {
    if(this.registerForm.valid==true)
    {
      this._AuthService.register(this.registerForm.value).subscribe((data)=>{
        if(data.message=='success'){
          this._ToastrService.success("Register success","Register")
          this._Router.navigateByUrl("/login")
          
        }
        else{
          this._ToastrService.error("Register failed","Register")
          this.registerForm.reset()
        }
      })
    }
   
  }
  goTologin(){
    this._Router.navigateByUrl("/login")
  }


  constructor(private _AuthService:AuthService, private _Router:Router, private _ToastrService:ToastrService ) { }

  ngOnInit(): void {
  }

}
