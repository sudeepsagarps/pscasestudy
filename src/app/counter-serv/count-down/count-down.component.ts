import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit, OnDestroy {
  pausedAtCounter: number[] = [];
  interval: any;
  counterValue: any;
  liveCounterValue: any;
  pauseStatus: boolean = false;
  currDateTime: any[] = [];
  logger: any;
  counterValSubscription: Subscription | undefined;
  pauseClickCountSubscription: Subscription | undefined;
  pauseStatsSubscription: Subscription | undefined;
  loggerSubscription: Subscription | undefined;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterValSubscription =
      this.counterService.counterValSubject.subscribe((data) => {
        this.counterValue = data;
        if (!this.liveCounterValue || !data) {
          this.liveCounterValue = data;
        }
      });

    this.pauseStatsSubscription =
      this.counterService.pauseStatsSubject.subscribe((data) => {
        this.pauseStatus = data;
        this.validateStartTimer();
        this.validatePauseTimer();
      });

    this.loggerSubscription = this.counterService.logDateTimeSubject.subscribe(
      (data) => {
        this.logger = data;
        this.dateTimeLogger();
      }
    );
  }

  validateStartTimer(): void {
    if (this.counterValue && !this.pauseStatus) {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  }

  validatePauseTimer(): void {
    if (!this.counterValue) {
      this.pausedAtCounter = [];
    }
    if (this.pauseStatus) {
      this.pausedAtCounter.push(this.liveCounterValue);
      this.pauseTimer();
    }
    this.counterService.setPausedAt(this.pausedAtCounter);
  }

  startTimer(): void {
    this.interval = setInterval(() => {
      if (this.liveCounterValue > 0) {
        this.liveCounterValue--;
      } else {
        this.liveCounterValue = 0;
      }
    }, 1000);
  }

  pauseTimer(): void {
    clearInterval(this.interval);
  }

  dateTimeLogger(): void {
    if (Object.keys(this.logger).length < 1) {
      this.currDateTime = [];
      this.counterService.setLogger(this.currDateTime);
    }
    this.currDateTime.push(this.logger);
    this.counterService.setLogger(this.currDateTime);
  }

  ngOnDestroy(): void {
    this.counterValSubscription?.unsubscribe();
    this.pauseClickCountSubscription?.unsubscribe();
    this.pauseStatsSubscription?.unsubscribe();
    this.loggerSubscription?.unsubscribe();
  }
}
