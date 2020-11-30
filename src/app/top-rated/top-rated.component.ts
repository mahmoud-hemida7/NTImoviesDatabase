import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {

  topRatedMovies:any[]=[]
  imgBaseUrl:string="https://image.tmdb.org/t/p/original"

  constructor(private _MoviesService:MoviesService) { 
    _MoviesService.getMovies(`top_rated`).subscribe((data=>{
      this.topRatedMovies=data.results
    }))
  }

  ngOnInit(): void {
  }

}
