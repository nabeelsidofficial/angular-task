import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private heroesUrl = 'api/heroes';  // URL to web api
  private productsUrl = 'https://localhost:7158/Product/GetProducts';  // URL to web api
  
  constructor(private http: HttpClient) {
   }

   /** GET heroes from the server */
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.productsUrl)
}
}
