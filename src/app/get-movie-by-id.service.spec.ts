import { TestBed } from '@angular/core/testing';

import { GetMovieByIdService } from './get-movie-by-id.service';

describe('GetMovieByIdService', () => {
  let service: GetMovieByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovieByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
