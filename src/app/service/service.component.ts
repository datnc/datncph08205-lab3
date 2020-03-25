import { Component, OnInit } from '@angular/core';
import { Product } from "../Product";
import {ProductService} from '../service/product.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  products : Product[];
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
      this.products = this.productService.getProducts();
  }

}