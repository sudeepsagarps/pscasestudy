import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FontAwesomeModule
  ]
})

export class ProductModule {
}
