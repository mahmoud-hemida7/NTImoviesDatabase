import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.scss']
})
export class TvshowDetailsComponent implements OnInit {
  type:any;
  id:any;
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  trendingTvshow:any;

  constructor( private _ActivatedRoute: ActivatedRoute , private _MoviesService: MoviesService) { 
    this.type = _ActivatedRoute.snapshot.paramMap.get(`type`);
    this.id = _ActivatedRoute.snapshot.paramMap.get(`id`);
    _MoviesService.getItemDetails(this.type,this.id).subscribe((data)=>{
      this.trendingTvshow=data;
      
    })
    
  }

  ngOnInit(): void {
  }

}
