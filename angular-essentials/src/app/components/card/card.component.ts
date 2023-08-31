import { Component, Input, Output, inject } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() showRating: boolean = false;
  @Input() rating: number = 0;
}


