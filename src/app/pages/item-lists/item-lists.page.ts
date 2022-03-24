import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-item-lists',
  templateUrl: './item-lists.page.html',
  styleUrls: ['./item-lists.page.scss'],
})
export class ItemListsPage implements OnInit {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];

  public products;

  constructor(
    private data: DataService,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();

    
    this.productService.product().subscribe(element => {
      this.products = element.data;
    });

  }

}
