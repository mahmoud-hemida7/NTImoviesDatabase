import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  goToRegister(){
    this._Router.navigateByUrl("/register")
  }
  goToLogin(){
    this._Router.navigateByUrl("/login")
  }




  /////////////////////////////////////////////
  lastMovies:any[]=[];
  lastSeries:any[]=[];
  upcomingMovies:any[]=[];
  topRatedMovies:any[]=[];
  

  imgBaseUrl:string="https://image.tmdb.org/t/p/original"

  constructor(private _Router:Router ,private _MoviesService: MoviesService ,public _AuthService:AuthService) {
    _MoviesService.getTrendingItems(`movie`).subscribe((data)=>{
      this.lastMovies= [data.results[0]]
    })
    _MoviesService.getTrendingItems(`tv`).subscribe((data)=>{
      this.lastSeries= [data.results[0]]
    })
    _MoviesService.getMovies(`upcoming`).subscribe((data)=>{
      this.upcomingMovies= [data.results[0]]
    })
    _MoviesService.getMovies(`top_rated`).subscribe((data)=>{
      this.topRatedMovies= [data.results[0]]
    })

   }

  ngOnInit(): void {
  }

}


