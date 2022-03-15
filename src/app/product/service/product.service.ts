import { Injectable } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  fetchProductList(): Observable<any> {
    const url = 'https://fakestoreapi.com/products';
    return this.http.get<any>(url);
    // response.subscribe(data => {
    //   return data;
    // });
  }
}
