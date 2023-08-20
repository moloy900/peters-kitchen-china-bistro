import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/cartItem';
import { FoodservicesService } from '../services/food/foodservices.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) {

    this.setCart() 
  }

  ngOnInit(): void {}

  setCart() { 
    this.cart = this.cartService.getCart();
    console.log(this.cart)
  }

  removeFromCart(cartItems: CartItem) {
    this.cartService.removeFromCart(cartItems.food.id);
    this.setCart();
  }

  changeQuantity(cartItems: CartItem, quantityString: string) {
    const quantity = Number(quantityString);
    this.cartService.changeQuantity(cartItems.food.id, quantity);
    this.setCart();
  }
}
