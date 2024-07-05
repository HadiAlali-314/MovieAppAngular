import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  @Input() poster_path: string = '';
  @Input() original_title: string = '';
  @Input() vote_average: string = '';
  @Input() release_date: string = '';
  @Input() id: string = '';
}
