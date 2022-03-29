import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.page.html',
  styleUrls: ['./my-cart.page.scss'],
})
export class MyCartPage implements OnInit {

  public products;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.productService.product().subscribe(element => {
      this.products = element.data;
    });
  }

}
