import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
MoviesService

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent implements OnInit {
  type:any;
  id:any;
  imgBaseUrl:string="https://image.tmdb.org/t/p/original";
  trindingMovie:any;

  constructor( private _ActivatedRoute: ActivatedRoute , private _MoviesService: MoviesService) { 
    this.type = _ActivatedRoute.snapshot.paramMap.get(`type`);
    this.id = _ActivatedRoute.snapshot.paramMap.get(`id`);
    _MoviesService.getItemDetails(this.type,this.id).subscribe((data)=>{
      this.trindingMovie=data;
      
    })
    
  }

  ngOnInit(): void {
  }

}
