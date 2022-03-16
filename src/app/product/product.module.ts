import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { GridViewComponent } from './product-list/grid-view/grid-view.component';
import { ListViewComponent } from './product-list/list-view/list-view.component';


@NgModule({
  declarations: [
    ProductListComponent,
    GridViewComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ]
})

export class ProductModule {
}
