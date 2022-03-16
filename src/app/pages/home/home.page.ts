import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];

  public users: Array<IUser> = [];

  constructor(
    private data: DataService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
    this.featuredProducts = this.data.getFeaturedProducts();
    this.bestSellProducts = this.data.getBestSellProducts();

    this.userService.user().subscribe(data => {
      this.users = data;

      console.log(this.users);

      this.users.forEach(element => {
        console.log(element.name)
      });
    });
  }

}
