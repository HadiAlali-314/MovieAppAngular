import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopularMoviesService {
  constructor(private http: HttpClient) {}
  fetchData(): Observable<any> {
    const apiUrl =
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzc3ZGYxYmFjY2M0MjZiZDI1MjIxZWI0ZGU4YTNlOSIsInN1YiI6IjY1MWRiMWNmZWE4NGM3MDEyZDY5N2U5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VAuvvfMblIvZIdjzzBIyArPqeE8qjJJhNxM2kq4dkGw'
    );

    const options = { headers: headers };

    return this.http.get(apiUrl, options);
  }
}
