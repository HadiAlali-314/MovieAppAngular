import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchMoviesService {
  constructor(private http: HttpClient) {}
  searchMovies(query: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzc3ZGYxYmFjY2M0MjZiZDI1MjIxZWI0ZGU4YTNlOSIsInN1YiI6IjY1MWRiMWNmZWE4NGM3MDEyZDY5N2U5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VAuvvfMblIvZIdjzzBIyArPqeE8qjJJhNxM2kq4dkGw'
    );

    const options = { headers: headers };
    return this.http.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
  }
}
