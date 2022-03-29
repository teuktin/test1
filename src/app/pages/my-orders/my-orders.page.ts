import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

  public products;

  constructor(
    private productService: ProductService,
  ) {}

  ngOnInit() {
    this.productService.product().subscribe(element => {
      this.products = element.data;
    });
  }

}
