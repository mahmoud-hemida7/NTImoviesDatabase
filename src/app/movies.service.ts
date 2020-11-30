import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private  _HttpClient:HttpClient) { }  
  getTrendingItems(mediaType):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=68c16838d0b83b772773cb05dd41423b`)
  }
  getItemDetails(mediaType,id):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=68c16838d0b83b772773cb05dd41423b&language=en-US`)
  }
  getMovies(item):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${item}?api_key=68c16838d0b83b772773cb05dd41423b&language=en-US`)
  }
}
