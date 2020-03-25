import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { data } from "../MockData";

@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  products = data;
  selected: Product;
  hienthi(product) {
      this.selected = product;
  }
  xoa(id){
    return this.products = this.products.filter(product => product.id != id);
  }
}
