import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private heroesUrl = 'api/heroes';  // URL to web api
  private BaseUrl = 'https://localhost:7158/';  // URL to web api
  private getUrl = 'Product/GetProducts';  // URL to web api
  private updateUrl = 'Product/UpdateProduct';  // URL to web api
  
  constructor(private http: HttpClient) {
   }

   /** GET heroes from the server */
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.BaseUrl+this.getUrl)
}
updateProducts(id: number,productName: string): Observable<Product[]> {
  const body = { id: 1,
    productName : "test" };
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post<Product[]>(this.BaseUrl+ this.updateUrl,  JSON.stringify(body),httpOptions);

}
    

}
