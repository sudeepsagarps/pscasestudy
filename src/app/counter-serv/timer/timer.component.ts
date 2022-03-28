import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  // supportung variables
  counter: number | undefined;
  isPaused: boolean = true;
  startClickCounter: number = 0;
  pauseClickCounter: number = 0;
  pausedAtList = this.counterService.pausedAtSubject;
  counterBtnLabel: string = 'Start';

  constructor(private counterService: CounterService) {}

  /**
   * set the counter value
   * emit counter value, log value, pause and start click count
   */
  toggleLimit(): void {
    this.counterService.updateCounterValue(this.counter);
    this.isPaused = !this.isPaused;

    if (this.isPaused) {
      this.counterBtnLabel = 'Start';
      this.pauseClickCounter++;
      this.counterService.logCurrentDateTime({
        label: 'Paused at',
        value: new Date(),
      });
      this.counterService.pauseCountClick(this.pauseClickCounter);
    } else {
      this.counterBtnLabel = 'Pause';
      this.startClickCounter++;
      this.counterService.logCurrentDateTime({
        label: 'Started at',
        value: new Date(),
      });
      this.counterService.startCountClick(this.startClickCounter);
    }
    this.counterService.setPauseSatus(this.isPaused);
  }

  /**
   * reset the counter and all its depending emiiter value
   */
  reset(): void {
    this.counter = undefined;
    this.startClickCounter = 0;
    this.pauseClickCounter = 0;
    this.isPaused = true;
    this.counterBtnLabel = 'Start';
    this.counterService.updateCounterValue(0);
    this.counterService.setPauseSatus(false);
    this.counterService.pauseCountClick(0);
    this.counterService.startCountClick(0);
    this.counterService.logCurrentDateTime({});
  }
}
