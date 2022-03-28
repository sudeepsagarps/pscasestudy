import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDivRoutingModule } from './dynamic-div-routing.module';
import { DynamicDivComponent } from './dynamic-div/dynamic-div.component';


@NgModule({
  declarations: [
    DynamicDivComponent
  ],
  imports: [
    CommonModule,
    DynamicDivRoutingModule
  ]
})
export class DynamicDivModule { }
