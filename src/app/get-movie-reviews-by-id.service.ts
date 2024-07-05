import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetMovieReviewsByIdService {
  constructor(private http: HttpClient) {}
  getReviews(id: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzc3ZGYxYmFjY2M0MjZiZDI1MjIxZWI0ZGU4YTNlOSIsInN1YiI6IjY1MWRiMWNmZWE4NGM3MDEyZDY5N2U5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VAuvvfMblIvZIdjzzBIyArPqeE8qjJJhNxM2kq4dkGw'
    );

    const options = { headers: headers };
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`,
      options
    );
  }
}
