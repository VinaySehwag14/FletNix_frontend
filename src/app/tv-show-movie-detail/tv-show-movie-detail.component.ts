import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowMovieService } from '../services/tv-show-movie.service';

@Component({
  selector: 'app-tv-show-movie-detail',
  templateUrl: './tv-show-movie-detail.component.html',
  styleUrls: ['./tv-show-movie-detail.component.css']
})
export class TvShowMovieDetailComponent implements OnInit {
  id: number = 0;
  tvShowMovie: any;

  constructor(private route: ActivatedRoute, private tvShowMovieService: TvShowMovieService) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      this.id = +idString;
      this.tvShowMovieService.getTvShowMovie(this.id).subscribe(tvShowMovie => {
        this.tvShowMovie = tvShowMovie;
      });
    }
  }
}
