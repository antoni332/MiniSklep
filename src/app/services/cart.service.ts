import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  constructor() {}

  getItems(): CartItem[] {
    return this.cartItems.getValue();
  }

  addToCart(product: Product) {
    const items = this.getItems();
    const existing = items.find(i => i.product.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      items.push({ product, quantity: 1 });
    }

    this.cartItems.next([...items]);
  }

  removeFromCart(productId: number) {
    const items =this.getItems().filter(i => i.product.id !== productId);
    this.cartItems.next(items);
  }

  changeQuantity(productId: number, quantity: number) {
    const items = this.getItems();

    const item = items.find(i => i.product.id === productId);
    if (!item) return;

    item.quantity = quantity;

    if (item.quantity <= 0) {
      this.removeFromCart(productId);
    } else {
      this.cartItems.next([...items]);
    }
  }

  getTotalPrice(): number {
    return this.getItems()
      .reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
