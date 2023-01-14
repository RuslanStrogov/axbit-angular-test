import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, ReplaySubject, switchMap } from 'rxjs';
import { MovieTheater } from '../models/movie-theater';

@Injectable({
  providedIn: 'root'
})
export class MovieTheaterService {

  constructor(private http: HttpClient) {}

  getMovieTheaterRows(limit: number = 5, offset: number = 0): Observable<MovieTheater[]> {
    return this.http
    .get('/v1/datasets/495/rows', {
      observe: 'response',
      params: new HttpParams()
        .set('$top', limit)
        .set('$skip', offset)
        // .set('$inlinecount', 'allpages')
        // $orderby
    })
    .pipe(map((res: any) => res.body))
  }

}
