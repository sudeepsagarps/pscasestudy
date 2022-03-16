import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  // eventEmitter
  @Output() counterValue: EventEmitter<number> = new EventEmitter();
  @Output() pauseStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() startCountClick: EventEmitter<number> = new EventEmitter();
  @Output() pauseCountClick: EventEmitter<number> = new EventEmitter();
  @Output() logCurrDateTime: EventEmitter<{}> = new EventEmitter();


  @Input() pauseAtList: any;

  // supportung variables
  counter: number | undefined;
  isPaused: boolean = false;
  startClickCounter: number = 0;
  pauseClickCounter: number = 0;


  constructor() {
  }

  ngOnInit(): void {
  }

  toggleLimit(): void {
    this.counterValue.emit(this.counter);
    this.isPaused = !this.isPaused;


    if (!this.isPaused) {
      this.pauseClickCounter++;
      this.logCurrDateTime.emit({label: 'Paused at', value: new Date()});
      this.pauseCountClick.emit(this.pauseClickCounter);

    } else {
      this.startClickCounter++;
      this.logCurrDateTime.emit({label: 'Started at', value: new Date()});
      this.startCountClick.emit(this.startClickCounter);
    }

    this.pauseStatus.emit(this.isPaused);
  }

  reset(): void {
    this.counter = undefined;
    this.counterValue.emit(0);
    this.startCountClick.emit(0);
    this.pauseCountClick.emit(0);
  }
}
