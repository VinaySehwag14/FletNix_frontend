import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-showlisting',
  templateUrl: './showlisting.component.html',
  styleUrls: ['./showlisting.component.css']
})
export class ShowlistingComponent implements OnInit {
  tvShowsMovies: any[] = [];
  filteredTvShowsMovies: any[] = [];
  totalCount: number = 0;
  currentPage: number = 1;
  perPage: number = 15;
  totalPages: number = 0;
  searchTerm: string = '';
  searchBy: string = 'title'; 
  selectedType: string = 'all';
  allShows: any[] = [];
  filteredShows: any[] = [];
  filterOption: string = '';
  movieId: string = '';
  selectedTvShowMovie: any;
  movie: any;
  

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {
    
   }

   ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      console.log('Movie ID:', this.movieId);
    });
    this.getTvShowsMovies(this.currentPage);
  }

  onMovieClick(movieId: string) {
    this.movieId = movieId;
  }
 
  getTvShowsMovies(page: number) {
    let url = `https://fletnix.onrender.com/api/movies?page=${page}&limit=${this.perPage}`;

    if (this.searchTerm) {
      url += `&q=${this.searchTerm}&searchBy=${this.searchBy}`; // Add the searchBy parameter to the URL
    }

    if (this.selectedType !== 'all') {
      url += `&type=${this.selectedType}`;
    }

    this.http.get(url)
      .subscribe((response: any) => {
        this.tvShowsMovies = response.results;
        this.totalCount = response.totalCount;
        this.currentPage = page;
        this.perPage = this.perPage;
        this.totalPages = Math.ceil(this.totalCount / this.perPage);

        // If there's no search term, display all movies and TV shows
        if (!this.searchTerm) {
          this.filteredTvShowsMovies = this.tvShowsMovies;
        } else {
          // Otherwise, filter the results based on the search term
          this.filterTvShowsMovies();
        }
      });
  }

  searchTvShowsMovies() {
    let url = `http://localhost:3000/api/movies/search?q=${this.searchTerm}&searchBy=${this.searchBy}`;

    this.http.get(url)
      .subscribe((response: any) => {
        this.tvShowsMovies = response;
        this.totalCount = this.tvShowsMovies.length;
        this.currentPage = 1;
        this.perPage = this.perPage;
        this.totalPages = Math.ceil(this.totalCount / this.perPage);

        // Update both the main and filtered results based on the search term
        this.filteredTvShowsMovies = this.tvShowsMovies;
        this.filterTvShowsMovies();
      });
  }

  onTvShowMovieClick(tvShowMovie: any) {
    this.selectedTvShowMovie = tvShowMovie;
    console.log('Selected TV show/movie:', this.selectedTvShowMovie);
  }
  

  filterTvShowsMovies() {
    this.filteredTvShowsMovies = this.tvShowsMovies.filter(tvShowMovie => {
      const titleMatches = tvShowMovie.title?.toLowerCase().includes(this.searchTerm.toLowerCase());
      const castMatches = tvShowMovie.cast?.split(',').map((castMember: string) => castMember.trim().toLowerCase())
          .includes(this.searchTerm.toLowerCase());
      return titleMatches || castMatches;
    });
  }

  onFilterChanged(filterOption: string) {
    // Update the selected filter option
    this.filterOption = filterOption;
  
    // Apply filter to the list of TV Shows/Movies
    this.filteredTvShowsMovies = this.tvShowsMovies.filter(tvShowMovie => {
      if (filterOption === '' || filterOption === 'all') {
        // If filter option is all, return all TV Shows/Movies
        return true;
      } else if (filterOption === 'TV Show') {
        // If filter option is TV Shows, return only TV Shows
        return tvShowMovie.type === 'TV Show';
      } else if (filterOption === 'Movie') {
        // If filter option is Movies, return only Movies
        return tvShowMovie.type === 'Movie';
      }

      return false;
    });
  
    // Reset current page to 1
    this.currentPage = 1;
  }
  
  

  onPageChange(page: number) {
    this.getTvShowsMovies(page);
  }

  onSearch() {
    this.currentPage = 1;
    this.getTvShowsMovies(this.currentPage);
  }
  onSearchInput(event: any) {
    this.currentPage = 1;
    this.searchTerm = event.target.value;
    this.getTvShowsMovies(this.currentPage);
  }

  
  }
