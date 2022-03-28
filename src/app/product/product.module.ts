import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { GridViewComponent } from './product-list/grid-view/grid-view.component';
import { ListViewComponent } from './product-list/list-view/list-view.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faListUl, faThLarge } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    ProductListComponent,
    GridViewComponent,
    ListViewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FontAwesomeModule
  ]
})

export class ProductModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faListUl, faThLarge);
  }
}
