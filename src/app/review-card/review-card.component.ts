import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css'],
})
export class ReviewCardComponent {
  @Input() content: string = '';
  @Input() rating: string = '';
  @Input() author: string = '';
}
