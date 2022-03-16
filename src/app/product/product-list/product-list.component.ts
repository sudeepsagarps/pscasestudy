import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListComponent implements OnInit {
  productList$: any;
  viewType: number = 1;
  constructor(private prodService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(): Promise<void> {
    this.productList$ = await this.prodService.fetchProductList();
  }

  changeView(laodLayout: number): void {
    this.viewType = laodLayout;
  }

  sortFilter(arg: any): void {
    const sortType = arg.target.value;
      this.productList$ = this.productList$.pipe(map((arrData => this.sortArray(arrData, sortType))));
  }

  sortArray(arrData: any, sortType: string): string[] {
      if (sortType === 'desc') {
        return arrData.sort((a: any, b: any) => b.price - a.price);
      } else {
        return arrData.sort((a: any, b: any) => a.price - b.price);
      }
  }

}
