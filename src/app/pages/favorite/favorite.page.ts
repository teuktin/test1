import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

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
