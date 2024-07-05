import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMovieByIdService } from '../get-movie-by-id.service';
import { GetMovieReviewsByIdService } from '../get-movie-reviews-by-id.service';
import { GetMovieCastByIdService } from '../get-movie-cast-by-id.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  tabs = [
    { id: 1, label: 'About', active: true },
    { id: 2, label: 'Reviews', active: false },
    { id: 3, label: 'Cast', active: false },
  ];
  movieDetails: any = {};
  reviews: any[] = [];
  casts: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private getMovieByIdService: GetMovieByIdService,
    private getMovieReviewsByIdService: GetMovieReviewsByIdService,
    private getMovieCastByIdService: GetMovieCastByIdService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // get movies
      const movieId = params['id'];
      this.getMovieByIdService.searchMovies(movieId).subscribe((data) => {
        this.movieDetails = data;
        console.log(this.movieDetails);
      });

      //get reviews
      this.getMovieReviewsByIdService.getReviews(movieId).subscribe((data) => {
        this.reviews = data.results;
        console.log(this.reviews);
      });

      //get cast
      this.getMovieCastByIdService.getMovieCast(movieId).subscribe((data) => {
        this.casts = data.cast;
        console.log(this.casts);
      });
    });
  }
  setActiveTab(tab: any) {
    this.tabs.forEach((t) => (t.active = false));
    tab.active = true;
  }
}
