import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit {

  pausedAtCounter: number[] = [];
  interval: any;
  counterValue: any;
  pauseStatus: boolean = false;
  startCounter: number = 0;
  pauseCounter: number = 0;
  currDateTime: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  setLimitValue(args: any) {
    if (this.pauseStatus) {
      this.pausedAtCounter.push(this.counterValue);
      this.pauseTimer();
      return;
    }
    this.counterValue = args;
    this.startTimer();
  }

  setPauseStatus(args: any) {
    this.pauseStatus = args;
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.counterValue > 0) {
        this.counterValue--;
      } else {
        this.counterValue = 0;
      }
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  setStartCount(args: any) {
    this.startCounter = args;
  }

  setPauseCount(args: any) {
    this.pauseCounter = args;
  }

  logDateTime(args: any) {
    this.currDateTime.push(args);
  }
}
