import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  imgBaseUrl:string="https://image.tmdb.org/t/p/original"
  trndingTvShow:any[]=[];

  constructor( private _MoviesService:MoviesService) {
    _MoviesService.getTrendingItems(`tv`).subscribe((data)=>{
      this.trndingTvShow= data.results
    })
   }

  ngOnInit(): void {
  }

}
