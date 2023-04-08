import { TestBed } from '@angular/core/testing';

import { TvShowMovieService } from './tv-show-movie.service';

describe('TvShowMovieService', () => {
  let service: TvShowMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvShowMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
