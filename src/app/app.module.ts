import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/components/home/home.component';
import { SearchComponent } from './components/components/search/search.component';
import { WatchlistComponent } from './components/components/watchlist/watchlist.component';
import { LoaderComponent } from './loader/loader.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { NoSearchResultsComponent } from './no-search-results/no-search-results.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { ReviewCardComponent } from './review-card/review-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    WatchlistComponent,
    LoaderComponent,
    MovieCardComponent,
    NoSearchResultsComponent,
    MovieDetailsComponent,
    ReviewCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
