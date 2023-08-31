import { Component } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  constructor(private logger: LogService) {
  }

  testLog(): void {
    this.logger.log("My fist log service execution 😛");
  };

  ngOnInit(): void {
    this.testLog();
  }
}
