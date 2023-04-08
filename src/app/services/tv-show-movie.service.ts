import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowMovieService {

  private tvShowMoviesUrl = 'https://fletnix.onrender.com/api/movies';

  constructor(private http: HttpClient) { }

  getTvShowMovie(id: number): Observable<any> {
    const url = `${this.tvShowMoviesUrl}/${id}`;
    return this.http.get<any>(url);
  }

}
