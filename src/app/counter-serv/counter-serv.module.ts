import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterServRoutingModule } from './counter-serv-routing.module';
import { ClickCounterComponent } from './click-counter/click-counter.component';
import { CountDownComponent } from './count-down/count-down.component';
import { LoggerComponent } from './logger/logger.component';
import { TimerComponent } from './timer/timer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClickCounterComponent,
    CountDownComponent,
    LoggerComponent,
    TimerComponent,
  ],
  imports: [CommonModule, CounterServRoutingModule, FormsModule],
})
export class CounterServModule {}
