import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
})
export class LoggerComponent {
  currDateTime = this.counterService.loggerSubject;

  constructor(private counterService: CounterService) {}
}
