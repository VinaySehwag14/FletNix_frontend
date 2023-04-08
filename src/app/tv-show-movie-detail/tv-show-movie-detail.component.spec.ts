import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowMovieDetailComponent } from './tv-show-movie-detail.component';

describe('TvShowMovieDetailComponent', () => {
  let component: TvShowMovieDetailComponent;
  let fixture: ComponentFixture<TvShowMovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowMovieDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
