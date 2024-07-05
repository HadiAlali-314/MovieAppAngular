import { Component } from '@angular/core';
import { SearchMoviesService } from 'src/app/search-movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery: string = '';

  searchResults: any[] = [];

  timeout: any = null;
  noResults: boolean = false;
  constructor(private searchMoviesService: SearchMoviesService) {}

  search() {
    clearTimeout(this.timeout);
    if (this.searchQuery) {
      this.timeout = setTimeout(() => {
        this.searchMoviesService
          .searchMovies(this.searchQuery)
          .subscribe((data) => {
            this.searchResults = data.results;
            this.searchResults.length === 0
              ? (this.noResults = true)
              : (this.noResults = false);
          });
      }, 500);
    } else {
      this.searchResults = [];
    }
  }
}
