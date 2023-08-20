import { Component, OnInit } from '@angular/core';
import { Foods } from '../shared/models/food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodservicesService } from '../services/food/foodservices.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css'],
})
export class FoodpageComponent implements OnInit {
  food!: Foods;

  constructor(
    private activeRoute: ActivatedRoute,
    private foodservice: FoodservicesService,
    private cartService: CartService,
    private router:Router
  ) {
    activeRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodservice.getFoodById(params['id']);
      }
    });
  }

  ngOnInit(): void {}

  addToCart(){
    this.cartService.addToCart(this.food);
    // this.router.navigateByUrl('/cart-page') 
    console.log(this.food)
  }
}
 