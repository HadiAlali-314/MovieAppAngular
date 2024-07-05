import { TestBed } from '@angular/core/testing';

import { GetMovieReviewsByIdService } from './get-movie-reviews-by-id.service';

describe('GetMovieReviewsByIdService', () => {
  let service: GetMovieReviewsByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovieReviewsByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
