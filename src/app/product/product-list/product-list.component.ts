import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../service/product.service';
// import { faThLarge } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList$: any;
  constructor(private prodService: ProductService) {}

  async ngOnInit(): Promise<void> {
    this.productList$ = await this.prodService.fetchProductList();
  }
}
