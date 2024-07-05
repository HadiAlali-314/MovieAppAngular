import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PopularMoviesService } from './popular-movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    private router: Router,
    private popularMoviesService: PopularMoviesService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveTab(event.url);
      }
    });
  }
  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.popularMoviesService.fetchData().subscribe(() => {
        this.isLoading = false;
      });
    }, 1000);
  }

  activeTab: string = 'home';

  setActiveTab(url: string) {
    const route = url.split('/')[1];

    switch (route) {
      case 'home':
        this.activeTab = 'home';
        break;
      case 'search':
        this.activeTab = 'search';
        break;
      case 'watchlist':
        this.activeTab = 'watchlist';
        break;
      default:
        this.activeTab = 'home';
        break;
    }
  }
}
