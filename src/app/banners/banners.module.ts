import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannersRoutingModule } from './banners-routing.module';
import { BannerListComponent } from './banner-list/banner-list.component';


@NgModule({
  declarations: [
    BannerListComponent
  ],
  imports: [
    CommonModule,
    BannersRoutingModule
  ]
})
export class BannersModule { }
