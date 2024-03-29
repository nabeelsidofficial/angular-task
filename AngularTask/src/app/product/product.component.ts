import { Component } from '@angular/core';
import { ProductService } from '../Service/product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Product } from './product';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  data: Product[] = [];
  constructor(private productService: ProductService) {
  }
  value="";
  clearValue() {
    this.value="";
  }
  onContentChanged(event : any)
  {
    debugger
    let name=event.target.innerHTML;
    let id=event.target.id;
    this.productService.updateProducts(id,name).subscribe(response => {
      debugger
      this.data = response;
      console.log(this.data);
    }); 

  }
ngOnInit()
{
  this.productService.getProducts().subscribe(response => {
  
    this.data = response;
    console.log(this.data);
  }); 
}
}
