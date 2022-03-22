import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../service/counter.service';

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.scss'],
})
export class ClickCounterComponent implements OnInit {
  startClickCount: number = 0;
  pauseClickCount: number = 0;

  startClickCountSubscription: Subscription | undefined;
  pauseClickCountSubscription: Subscription | undefined;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.startClickCountSubscription =
      this.counterService.startCountSubject.subscribe((data) => {
        this.startClickCount = data;
      });

    this.pauseClickCountSubscription =
      this.counterService.pauseCountSubject.subscribe((data) => {
        this.pauseClickCount = data;
      });
  }
}
