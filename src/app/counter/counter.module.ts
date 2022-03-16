import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CountDownComponent } from './count-down/count-down.component';
import { TimerComponent } from './timer/timer.component';
import { LoggerComponent } from './logger/logger.component';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CountDownComponent,
    TimerComponent,
    LoggerComponent,
    ClickCounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    FormsModule
  ]
})
export class CounterModule { }
