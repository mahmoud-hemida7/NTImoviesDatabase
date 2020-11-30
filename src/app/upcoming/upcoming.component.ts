import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  upcomingMovies:any[]=[]
  imgBaseUrl:string="https://image.tmdb.org/t/p/original"
  constructor(private _MoviesService:MoviesService) { 
    _MoviesService.getMovies(`upcoming`).subscribe((data)=>{
      this.upcomingMovies=data.results
    })
  }

  ngOnInit(): void {
  }

}
