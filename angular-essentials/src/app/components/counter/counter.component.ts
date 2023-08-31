import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() text: string = "votes";
  @Input() count: number = 0;

  add(): void {
    this.count++
  }

  subtract(): void {
    this.count--
  }

}
