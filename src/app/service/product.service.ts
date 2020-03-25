import { Injectable } from '@angular/core';
import { Product } from "../Product";
import { data } from "../MockData";


@Injectable()
export class ProductService {
  products = data;
  constructor() { }

  getProduct(id){
    return this.products.find(product => product.id == id);
  }
  removeProducts(id){
    console.log("service")
    return this.products = this.products.filter(product => product.id != id)
  }
  addProduct(product){

    console.log(product);

    let newObj = {id: 6,...product};
    console.log(newObj);
    
    this.products.push(newObj);
    console.log(this.products)

  }
}