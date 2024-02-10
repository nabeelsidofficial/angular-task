import { Component } from '@angular/core';
import { ProductService } from '../Service/product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from './product';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  data: Product[] = [];
  constructor(private productService: ProductService) {
  }


ngOnInit()
{
  this.productService.getProducts().subscribe(response => {
    debugger
    this.data = response;
    console.log(this.data);
  }); 
}
}
