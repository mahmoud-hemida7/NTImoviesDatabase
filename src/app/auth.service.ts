import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient) { }
  register(registerData):Observable<any>
  {
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signup",registerData)
  }
  login(loginData):Observable<any>
  {
    return this._HttpClient.post("https://routeegypt.herokuapp.com/signin",loginData)
  }

  islogedin(){
    return !!localStorage.getItem('token')
  }
}
