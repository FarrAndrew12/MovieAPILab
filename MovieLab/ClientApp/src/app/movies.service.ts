import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie }  

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  urlRoot: string;
  
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.urlRoot = baseUrl;
  }

  searchMoviesTitle(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.urlRoot + "movies/SearchByTitle/" + title);
  }
}
