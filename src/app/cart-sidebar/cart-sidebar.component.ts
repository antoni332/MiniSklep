import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-sidebar',
  imports: [CommonModule],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css'
})
export class CartSidebarComponent {

  cartItems$!: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cartItems$;
  }

  remove(id: number) {
    this.cartService.removeFromCart(id);
  }

  increaseQuantity(id: number) {
    const items = this.cartService.getItems();
    const item = items.find(i => i.product.id === id);
    if (item) {
      this.cartService.changeQuantity(id, item.quantity + 1);
    }
  }

  decreaseQuantity(id: number) {
    const items = this.cartService.getItems();
    const item = items.find(i => i.product.id === id);
    if (item) {
      this.cartService.changeQuantity(id, item.quantity - 1);
    }
  }

  totalPrice(): number {
    return parseFloat((this.cartService.getTotalPrice()).toFixed(2));
  }
}
