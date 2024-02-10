import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product/product';
import { CustomHttpService } from './custom-http.service';
import { UrlHelperService } from './url-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private urlHelper: UrlHelperService, private httpService: CustomHttpService) {
   }

   getProducts(): Observable<Product[]> {
      return this.httpService.get(this.urlHelper.GetProduct)
    }


    updateProducts(id: number,productName: string): Observable<Product[]> {
  const body = { id: id,
    productName : productName };
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.httpService.post(this.urlHelper.UpdateProduct,  JSON.stringify(body),httpOptions);
}
}
