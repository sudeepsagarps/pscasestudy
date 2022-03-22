import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.scss'],
})
export class ClickCounterComponent implements OnInit {
  startCounter: number = 0;
  pauseCounter: number = 0;
  @Input() startClickCount: number | undefined;
  @Input() pauseClickCount: number | undefined;

  constructor() {}

  ngOnInit(): void {}
}
