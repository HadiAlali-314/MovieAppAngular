import { TestBed } from '@angular/core/testing';

import { GetMovieCastByIdService } from './get-movie-cast-by-id.service';

describe('GetMovieCastByIdService', () => {
  let service: GetMovieCastByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMovieCastByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
