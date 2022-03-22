import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  counterValSubject = new Subject<any>();
  logDateTimeSubject = new Subject<any>();
  pauseCountSubject = new Subject<any>();
  startCountSubject = new Subject<any>();
  pauseStatsSubject = new Subject<any>();
  loggerSubject = new Subject<any>();
  pausedAtSubject = new Subject<number[]>();

  // setting of observables
  updateCounterValue(val: number | undefined) {
    this.counterValSubject.next(val);
  }

  logCurrentDateTime(val: {}): void {
    this.logDateTimeSubject.next(val);
  }

  pauseCountClick(val: number): void {
    this.pauseCountSubject.next(val);
  }

  startCountClick(val: number): void {
    this.startCountSubject.next(val);
  }

  setPauseSatus(val: boolean): void {
    this.pauseStatsSubject.next(val);
  }

  setLogger(val: string[]) {
    this.loggerSubject.next(val);
  }

  setPausedAt(val: number[]) {
    this.pausedAtSubject.next(val);
  }
}
