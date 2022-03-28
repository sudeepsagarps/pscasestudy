import { Component, OnInit } from '@angular/core';

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
  liveCounterValue: any;


  constructor() {}

  ngOnInit(): void {}

  setLimitValue(args: any) {
    if (!args) {
      this.counterValue = 0;
      this.liveCounterValue = 0;
      this.pausedAtCounter = [];
      this.pauseTimer();
      return;
    }
    this.counterValue = args;

    if (!this.liveCounterValue) {
      this.liveCounterValue = args;
    }
    if (this.pauseStatus) {
      this.pausedAtCounter.push(this.liveCounterValue);
      this.pauseTimer();
      return;
    }
    this.startTimer();
  }

  setPauseStatus(args: any): void {
    this.pauseStatus = args;
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

  setStartCount(args: any): void {
    if (this.checkIfCounterValueExist()) {
      this.startCounter = args;
    }
  }

  setPauseCount(args: any): void {
    if (this.checkIfCounterValueExist()) {
      this.pauseCounter = args;
    }
  }

  logDateTime(args: any): void {
    if (Object.keys(args).length < 1) {
      this.currDateTime = [];
    }
    if (this.checkIfCounterValueExist()) {
      this.currDateTime.push(args);
    }
  }

  checkIfCounterValueExist(): boolean {
    if (!this.counterValue) {
      this.startCounter = 0;
      this.pauseCounter = 0;
      return false;
    }
    return true;
  }
}
