import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Theater } from '../models/theater';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {

  constructor(private http: HttpClient) {}

  getTheater(): Observable<Theater[]> {
    return this.http
    .get('/v1/datasets/531', {
      observe: 'response',
    })
    .pipe(map((res: any) => res));
  }

  getTheaterRows(limit: number = 5, offset: number = 0): Observable<Theater[]> {
    return this.http
    .get('/v1/datasets/531/rows', {
      observe: 'response',
      params: new HttpParams()
      .set('$top', limit)
      .set('$skip', offset)
    })
    .pipe(map((res: any) => res.body));
  }

}
